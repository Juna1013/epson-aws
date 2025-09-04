/**
 * Product Selection Demo for AWS Assistant - Seiko Epson Intern Project
 * Interactive chat demo functionality for epson-proposals.html
 */

// Demo initialization
document.addEventListener('DOMContentLoaded', function() {
  const toggleDemo = document.getElementById('toggleDemo');
  const demoSection = document.getElementById('demoSection');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const chatForm = document.getElementById('chatForm');

  // Only initialize if demo elements exist
  if (!toggleDemo || !demoSection) return;

  // Demo scenarios
  const scenarios = {
    office: "オフィスで月500枚程度印刷し、カラー印刷も多く使います。予算は20万円程度で考えています。",
    home: "家庭で使用する小型のプリンターを探しています。写真印刷もできて、場所を取らないものが良いです。",
    photo: "写真印刷専用で、高画質なものを求めています。A3まで印刷できると嬉しいです。",
    business: "大量印刷が必要で、月間3000枚以上印刷します。ランニングコストを抑えたいです。",
    industrial: "産業用途でCAD図面の印刷が必要です。A0サイズまで対応できるものを探しています。"
  };

  // Product database (demo data)
  const products = {
    office: {
      name: "EW-M973A3T",
      type: "ビジネス複合機",
      price: "約180,000円",
      features: ["A3対応", "自動両面印刷", "大容量インクタンク", "無線LAN"],
      recommendation: "月間印刷量500〜2000枚のオフィスに最適。大容量インクタンクで印刷コストを大幅削減できます。"
    },
    home: {
      name: "EW-456A",
      type: "ホーム複合機",
      price: "約25,000円",
      features: ["コンパクト設計", "6色インク", "スマホ連携", "Wi-Fi Direct"],
      recommendation: "家庭での使用に最適。写真も文書もキレイに印刷でき、置き場所を選ばないコンパクト設計です。"
    },
    photo: {
      name: "EP-50V",
      type: "A3フォトプリンター", 
      price: "約60,000円",
      features: ["10色インク", "A3ノビ対応", "CDレーベル印刷", "色域拡張"],
      recommendation: "写真愛好家向け。10色インクによる美しいグラデーション表現で、プロ品質の写真印刷が可能です。"
    },
    business: {
      name: "LX-10050MF",
      type: "ビジネスインクジェット",
      price: "約450,000円",
      features: ["高速印刷", "大容量給紙", "低ランニングコスト", "A3対応"],
      recommendation: "大量印刷に最適。従来機比50%のランニングコスト削減を実現し、高い生産性を提供します。"
    },
    industrial: {
      name: "SureColor T-Series",
      type: "大判プリンター",
      price: "約800,000円",
      features: ["A0対応", "高精度印刷", "CAD/GIS対応", "24インチ幅"],
      recommendation: "産業用大判印刷のプロフェッショナルモデル。建築・土木業界での図面印刷に最適化されています。"
    }
  };

  // Toggle demo visibility
  toggleDemo.addEventListener('click', function() {
    if (demoSection.classList.contains('hidden')) {
      demoSection.classList.remove('hidden');
      toggleDemo.innerHTML = '<i class="fas fa-pause mr-2"></i>デモを終了';
    } else {
      demoSection.classList.add('hidden');
      toggleDemo.innerHTML = '<i class="fas fa-play mr-2"></i>デモを開始';
      // Reset chat
      if (chatMessages) {
        chatMessages.innerHTML = `
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fas fa-user-check text-blue-600 text-sm"></i>
            </div>
            <div class="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-md shadow-sm border">
              <p class="text-gray-800 text-sm">
                こんにちは！エプソン製品選定AIです。<br><br>
                <strong>🎯 あなたの用途・予算・要件を教えてください</strong><br>
                • どのような用途でお使いになりますか？<br>
                • 月間印刷量はどのくらいですか？<br>
                • ご予算の目安はありますか？
              </p>
            </div>
          </div>
        `;
      }
      if (chatInput) chatInput.value = '';
    }
  });

  // Add message to chat
  function addMessage(message, isUser = false) {
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex items-start space-x-3 message-animation ${isUser ? 'justify-end' : ''}`;
    
    if (isUser) {
      messageDiv.innerHTML = `
        <div class="bg-blue-600 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-md">
          ${message}
        </div>
        <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i class="fas fa-user text-gray-600 text-sm"></i>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i class="fas fa-user-check text-blue-600 text-sm"></i>
        </div>
        <div class="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-md shadow-sm border">
          ${message}
        </div>
      `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Generate product recommendation
  function generateRecommendation(input) {
    const lowerInput = input.toLowerCase();
    let recommendation = '';
    
    if (lowerInput.includes('オフィス') || lowerInput.includes('会社') || lowerInput.includes('事務所')) {
      const product = products.office;
      recommendation = `
        <div class="space-y-3">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">🎯 おすすめ製品</h4>
            <p class="text-base font-bold mb-1">${product.name}</p>
            <p class="text-sm text-gray-600 mb-2">${product.type} | ${product.price}</p>
            <p class="text-sm">${product.recommendation}</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">✅ 主な特徴</h5>
            <ul class="text-sm space-y-1">
              ${product.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-yellow-50 p-2 rounded-lg">
            <p class="text-xs text-gray-600"><strong>💡 AWS活用効果：</strong>印刷ログをS3蓄積、Lambdaでメンテナンス予測・消耗品自動発注システム連携</p>
          </div>
        </div>
      `;
    } else if (lowerInput.includes('家庭') || lowerInput.includes('家') || lowerInput.includes('ホーム')) {
      const product = products.home;
      recommendation = `
        <div class="space-y-3">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">🎯 おすすめ製品</h4>
            <p class="text-base font-bold mb-1">${product.name}</p>
            <p class="text-sm text-gray-600 mb-2">${product.type} | ${product.price}</p>
            <p class="text-sm">${product.recommendation}</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">✅ 主な特徴</h5>
            <ul class="text-sm space-y-1">
              ${product.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-yellow-50 p-2 rounded-lg">
            <p class="text-xs text-gray-600"><strong>💡 AWS活用効果：</strong>家庭での印刷パターンをS3で分析、Lambda経由で最適なインク配送タイミングを提案</p>
          </div>
        </div>
      `;
    } else if (lowerInput.includes('写真') || lowerInput.includes('フォト')) {
      const product = products.photo;
      recommendation = `
        <div class="space-y-3">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">🎯 おすすめ製品</h4>
            <p class="text-base font-bold mb-1">${product.name}</p>
            <p class="text-sm text-gray-600 mb-2">${product.type} | ${product.price}</p>
            <p class="text-sm">${product.recommendation}</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">✅ 主な特徴</h5>
            <ul class="text-sm space-y-1">
              ${product.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-yellow-50 p-2 rounded-lg">
            <p class="text-xs text-gray-600"><strong>💡 AWS活用効果：</strong>印刷品質データをS3保存、Lambdaで色調整の最適化・プリンター校正を自動化</p>
          </div>
        </div>
      `;
    } else if (lowerInput.includes('大量') || lowerInput.includes('3000') || lowerInput.includes('ビジネス')) {
      const product = products.business;
      recommendation = `
        <div class="space-y-3">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">🎯 おすすめ製品</h4>
            <p class="text-base font-bold mb-1">${product.name}</p>
            <p class="text-sm text-gray-600 mb-2">${product.type} | ${product.price}</p>
            <p class="text-sm">${product.recommendation}</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">✅ 主な特徴</h5>
            <ul class="text-sm space-y-1">
              ${product.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-yellow-50 p-2 rounded-lg">
            <p class="text-xs text-gray-600"><strong>💡 AWS活用効果：</strong>印刷ログをS3蓄積、Lambdaでメンテナンス予測・消耗品自動発注システム連携</p>
          </div>
        </div>
      `;
    } else if (lowerInput.includes('図面') || lowerInput.includes('a0') || lowerInput.includes('産業') || lowerInput.includes('業務')) {
      const product = products.industrial;
      recommendation = `
        <div class="space-y-3">
          <div class="bg-blue-50 p-3 rounded-lg">
            <h4 class="font-semibold text-blue-900 mb-2">🎯 おすすめ製品</h4>
            <p class="text-base font-bold mb-1">${product.name}</p>
            <p class="text-sm text-gray-600 mb-2">${product.type} | ${product.price}</p>
            <p class="text-sm">${product.recommendation}</p>
          </div>
          <div class="bg-green-50 p-3 rounded-lg">
            <h5 class="font-medium text-green-800 mb-2">✅ 主な特徴</h5>
            <ul class="text-sm space-y-1">
              ${product.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-yellow-50 p-2 rounded-lg">
            <p class="text-xs text-gray-600"><strong>💡 AWS活用効果：</strong>CADデータをS3保存、Lambda経由で図面管理システムと連携・バージョン管理を自動化</p>
          </div>
        </div>
      `;
    } else {
      recommendation = `
        <p class="text-gray-800 text-sm">申し訳ございません。より具体的な情報をお教えいただけますか？</p>
        <div class="mt-3 p-3 bg-blue-50 rounded-lg">
          <h5 class="font-medium text-blue-800 mb-2">📝 お聞かせください</h5>
          <ul class="text-sm text-blue-700 space-y-1">
            <li>• 使用用途（オフィス/家庭/写真印刷など）</li>
            <li>• 月間印刷枚数の目安</li>
            <li>• ご予算の範囲</li>
            <li>• カラー印刷の頻度</li>
            <li>• 必要な用紙サイズ</li>
          </ul>
        </div>
      `;
    }
    
    return recommendation;
  }

  // Load predefined scenario
  function loadScenario(type) {
    const scenario = scenarios[type];
    if (scenario && chatInput) {
      chatInput.value = scenario;
      chatInput.focus();
    }
  }

  // Make loadScenario available globally
  window.loadScenario = loadScenario;

  // Chat form submission
  if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = chatInput.value.trim();
      if (!input) return;

      // Add user message
      addMessage(`<p class="text-sm">${input}</p>`, true);
      chatInput.value = '';

      // Add AI response after delay
      setTimeout(() => {
        const recommendation = generateRecommendation(input);
        addMessage(recommendation);
      }, 1000);
    });
  }
});