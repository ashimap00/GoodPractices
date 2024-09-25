import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.id = "google-translate-script";
      document.body.appendChild(script);

      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.innerHTML = `
        function googleTranslateElementInit() {
          new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,hi,ta,te,kn,ml', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
        }
      `;
      document.body.appendChild(googleTranslateScript);
    };

    const updateLanguageNames = () => {
      const languageOptions = document.querySelectorAll('.goog-te-menu2-item div span, .goog-te-menu-value span');
      languageOptions.forEach(option => {
        const text = option.textContent.trim();
        switch (text) {
          case 'English':
            option.textContent = 'English';
            break;
          case 'Hindi':
            option.textContent = 'हिन्दी';
            break;
          case 'Tamil':
            option.textContent = 'தமிழ்';
            break;
          case 'Telugu':
            option.textContent = 'తెలుగు';
            break;
          case 'Kannada':
            option.textContent = 'ಕನ್ನಡ';
            break;
          case 'Malayalam':
            option.textContent = 'മലയാളം';
            break;
          default:
            break;
        }
      });

      // Update the selected option in the dropdown
      const selectedOption = document.querySelector('.goog-te-menu-value span:first-child');
      if (selectedOption) {
        const selectedText = selectedOption.textContent.trim();
        switch (selectedText) {
          case 'English':
            selectedOption.textContent = 'English';
            break;
          case 'Hindi':
            selectedOption.textContent = 'हिन्दी';
            break;
          case 'Tamil':
            selectedOption.textContent = 'தமிழ்';
            break;
          case 'Telugu':
            selectedOption.textContent = 'తెలుగు';
            break;
          case 'Kannada':
            selectedOption.textContent = 'ಕನ್ನಡ';
            break;
          case 'Malayalam':
            selectedOption.textContent = 'മലയാളം';
            break;
          default:
            break;
        }
      }
    };

    const observer = new MutationObserver(() => {
      updateLanguageNames();
    });

    const observeTranslateElement = () => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        observer.observe(translateElement, { childList: true, subtree: true });
      }
    };

    if (!document.querySelector("#google-translate-script")) {
      addGoogleTranslateScript();
      setTimeout(observeTranslateElement, 1); // Delay to ensure the widget is fully loaded
    } else {
      observeTranslateElement();
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
