import { useState, useEffect } from 'react';

export type Language = 'sv' | 'en';

const translations = {
  sv: {
    // Nav
    share_contact: "Dela kontakt",
    save_contact: "Spara kontakt",
    qr_code: "QR-kod",
    contact: "Kontakt",
    intelligence: "Intelligence",
    
    // Home
    system_status: "SYSTEM STATUS: ACTIVE",
    hero_title: "Roials Alpha OS",
    hero_subtitle: "Proprietär GTM-infrastruktur som härdar B2B-bolag till förvärvsbara tillgångar.",
    expansion_protocol: "Expansion Protocol",
    qualification_audit: "Qualification Audit",
    scroll: "Scroll",
    values_title_1: "PROPRIETÄR GTM ENGINEERING",
    values_desc_1: "Agent-baserad säljinfrastruktur. Proprietärt byggd. Systemet är ditt att behålla.",
    values_title_2: "Velocity",
    values_desc_2: "Installation av Roials Alpha OS",
    values_title_3: "Operational Stewardship",
    values_desc_3: "War Room: veckovis pipeline-genomgång. Likviditet och closing-disciplin.",
    trust_title: "Jonas Hylténs kunder har inkluderat:",
    alpha_title: "Terminal-access till dolt deal flow.",
    alpha_subtitle: "Agent-baserad GTM-infrastruktur.",
    
    // Forms
    form_entity: "Entity",
    form_rev_fy: "Current Revenue (FY)",
    form_rev_mo: "Current Monthly Revenue",
    form_arr: "ARR / MRR",
    form_mandate: "Qualification Mandate",
    form_submit: "SUBMIT AUDIT",
    form_transmitting: "TRANSMITTING_SIGNAL...",
    form_completed: "SIGNAL_DELIVERED_REDIRECTING",
    
    // Intelligence Archive
    back_to_terminal: "Tillbaka till Terminal",
    intelligence_archive: "Intelligence_Arkiv",
    intelligence_subtitle: "Operativ intelligens för sent-stadie SaaS. 150+ analyser.",
    subscribe: "Prenumerera",
    read_analysis: "Läs analys",
    want_insights: "Vill du ha våra analyser direkt?",
    insights_desc: "Intelligence-briefing kvartalsvis. Hög signal, inget brus.",
    subscribe_btn: "Prenumerera på Intelligence",
    book_meeting: "Boka konfidentiell genomgång",
    back_to_studio: "Tillbaka till Hyltén Venture Studio",
    close: "Stäng",
    sub_registered: "Prenumeration registrerad",
    sub_thanks: "Du kommer få Intelligence-briefing nästa kvartal.",
    
    // Intelligence Article
    back_to_archive: "Tillbaka till Arkiv",
    classified_analysis: "KLASSIFICERAD ANALYS:",
    date: "DATUM",
    author: "FÖRFATTARE",
    status: "STATUS",
    status_published: "PUBLICERAD",
    level: "NIVÅ",
    download_report: "LADDA NER FULL RAPPORT",
    download_desc: "Få hela metodiken i PDF. Exklusivt för ledningsgrupper.",
    download_btn: "Ladda ned",
    download_success: "Rapport skickas till din e-post",
    contact_title: "KONTAKT",
    contact_desc: "Boka en konfidentiell genomgång",
    studio_title: "VENTURE STUDIO",
    studio_desc: "Utforska vår studio-modell",
    prev: "Föregående",
    next: "Nästa",
    share: "Share",
    
    // Footer
    legal: "Legal",
    legal_alert: "GDPR: Vi behandlar endast personuppgifter i enlighet med gällande dataskyddslagstiftning. Du kan begära tillgång, rättelse eller radering av dina uppgifter genom att kontakta jonas@roials.co.",

    // Founder Protocol
    founder_protocol_phase_1: "Founder Protocol - Fas 1",
    operating_review_title: "Operating Review",
    operating_review_desc: "Veckovis Operating Review av dina säljsamtal. Data och kalibrering.",
    operational_validation_title: "Operational Validation",
    operational_validation_desc: "Operativ prövning",
    strategic_closing_title: "Strategic Closing",
    strategic_closing_desc: "Vi installerar closing-disciplin som säkrar kassaflöde.",
    phase_1_desc: "Fas 1 är provspelningen.",
    phase_2_desc: "Utökat mandat. Revenue share-struktur.",
    phase_3_desc: "Co-ownership. Tillgång till Hyltén-nätverket.",
    invitation_only: "Inbjudan sker direkt. Ingen ansökan.",
    scan_contact: "Skanna för att spara kontaktuppgifter direkt i din telefon.",
    
    // Categories & Meta
    intelligence_meta_title: "Intelligence Arkiv | Hyltén Venture Studio",
    intelligence_meta_desc: "Operativ intelligens och djupanalyser för sent-stadie SaaS, AI Enterprise och kapitalmarknader.",
    whatsapp_hello: "Hej Jonas! Jag vill ha mer information om Hyltén Venture Studio.",
    whatsapp_read_prefix: "Hej Jonas! Jag läste '",
    whatsapp_read_suffix: "' på Venture Studio Intelligence.",
    cat_alla: "Alla",
    cat_saas_monetization: "SaaS-monetisering",
    cat_ai_enterprise: "AI i Enterprise",
    cat_capital_markets: "Kapitalmarknad",
    cat_fundraising_ipo: "Fundraising & IPO",
    cat_gtm: "GTM-strategi",
    cat_venture_studio: "Venture Studio"
  },
  en: {
    // Nav
    share_contact: "Share contact",
    save_contact: "Save contact",
    qr_code: "QR Code",
    contact: "Contact",
    intelligence: "Intelligence",
    
    // Home
    system_status: "SYSTEM STATUS: ACTIVE",
    hero_title: "Roials Alpha OS",
    hero_subtitle: "Proprietary GTM infrastructure hardening B2B companies into acquirable assets.",
    expansion_protocol: "Expansion Protocol",
    qualification_audit: "Qualification Audit",
    scroll: "Scroll",
    values_title_1: "PROPRIETARY GTM ENGINEERING",
    values_desc_1: "Agent-based sales infrastructure. Proprietarily built. The system is yours to keep.",
    values_title_2: "Velocity",
    values_desc_2: "Installation of Roials Alpha OS",
    values_title_3: "Operational Stewardship",
    values_desc_3: "War Room: weekly pipeline review. Liquidity and closing discipline.",
    trust_title: "Jonas Hyltén's clients have included:",
    alpha_title: "Terminal access to hidden deal flow.",
    alpha_subtitle: "Agent-based GTM infrastructure.",
    
    // Forms
    form_entity: "Entity",
    form_rev_fy: "Current Revenue (FY)",
    form_rev_mo: "Current Monthly Revenue",
    form_arr: "ARR / MRR",
    form_mandate: "Qualification Mandate",
    form_submit: "SUBMIT AUDIT",
    form_transmitting: "TRANSMITTING_SIGNAL...",
    form_completed: "SIGNAL_DELIVERED_REDIRECTING",
    
    // Intelligence Archive
    back_to_terminal: "Back to Terminal",
    intelligence_archive: "Intelligence_Archive",
    intelligence_subtitle: "Operational intelligence for late-stage SaaS. 150+ analyses.",
    subscribe: "Subscribe",
    read_analysis: "Read analysis",
    want_insights: "Want our analyses directly?",
    insights_desc: "Quarterly Intelligence briefing. High signal, zero noise.",
    subscribe_btn: "Subscribe to Intelligence",
    book_meeting: "Book confidential briefing",
    back_to_studio: "Back to Hyltén Venture Studio",
    close: "Close",
    sub_registered: "Subscription registered",
    sub_thanks: "You will receive the Intelligence briefing next quarter.",
    
    // Intelligence Article
    back_to_archive: "Back to Archive",
    classified_analysis: "CLASSIFIED ANALYSIS:",
    date: "DATE",
    author: "AUTHOR",
    status: "STATUS",
    status_published: "PUBLISHED",
    level: "LEVEL",
    download_report: "DOWNLOAD FULL REPORT",
    download_desc: "Get the full methodology in PDF. Exclusive for executive teams.",
    download_btn: "Download",
    download_success: "Report will be sent to your email",
    contact_title: "CONTACT",
    contact_desc: "Book a confidential briefing",
    studio_title: "VENTURE STUDIO",
    studio_desc: "Explore our studio model",
    prev: "Previous",
    next: "Next",
    share: "Share",
    
    // Footer
    legal: "Legal",
    legal_alert: "GDPR: We process personal data solely in accordance with applicable data protection legislation. You may request access, rectification, or deletion of your data by contacting jonas@roials.co.",

    // Founder Protocol
    founder_protocol_phase_1: "Founder Protocol - Phase 1",
    operating_review_title: "Operating Review",
    operating_review_desc: "Weekly Operating Review of your sales calls. Data and calibration.",
    operational_validation_title: "Operational Validation",
    operational_validation_desc: "Operational validation.",
    strategic_closing_title: "Strategic Closing",
    strategic_closing_desc: "We install closing discipline that secures cash flow.",
    phase_1_desc: "Phase 1 is the audition.",
    phase_2_desc: "Extended mandate. Revenue share structure.",
    phase_3_desc: "Co-ownership. Access to the Hyltén network.",
    invitation_only: "By invitation only. No application.",
    scan_contact: "Scan to save contact details directly to your phone.",
    
    // Categories & Meta
    intelligence_meta_title: "Intelligence Archive | Hyltén Venture Studio",
    intelligence_meta_desc: "Operational intelligence and in-depth analyses for late-stage SaaS, AI Enterprise, and capital markets.",
    whatsapp_hello: "Hi Jonas! I would like more information about Hyltén Venture Studio.",
    whatsapp_read_prefix: "Hi Jonas! I read '",
    whatsapp_read_suffix: "' on Venture Studio Intelligence.",
    cat_alla: "All",
    cat_saas_monetization: "SaaS Monetization",
    cat_ai_enterprise: "AI in Enterprise",
    cat_capital_markets: "Capital Markets",
    cat_fundraising_ipo: "Fundraising & IPO",
    cat_gtm: "GTM Strategy",
    cat_venture_studio: "Venture Studio"
  }
};

type TranslationKeys = keyof typeof translations.sv;

export function getTranslation(key: TranslationKeys, lang: Language): string {
  return translations[lang][key] || translations.sv[key] || key;
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('hylten_lang');
    return (saved === 'en' || saved === 'sv') ? saved : 'en';
  });

  useEffect(() => {
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail === 'en' || customEvent.detail === 'sv') {
        setLang(customEvent.detail);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('hylten_lang');
    if (!saved) {
      fetch('https://ipapi.co/country/')
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch IP country');
          return res.text();
        })
        .then(country => {
          const cleanCountry = country.trim().toUpperCase();
          if (cleanCountry === 'SE') {
            changeLanguage('sv');
          } else {
            changeLanguage('en');
          }
        })
        .catch(() => {
          // Fallback to Timezone and Locale detection
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const userLocales = navigator.languages || [navigator.language];
          const isSwedishTZ = tz && (tz.includes('Stockholm') || tz.includes('Europe/Stockholm'));
          const isSwedishLocale = userLocales.some(l => l.toLowerCase().startsWith('sv'));
          
          if (isSwedishTZ || isSwedishLocale) {
            changeLanguage('sv');
          } else {
            changeLanguage('en');
          }
        });
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    localStorage.setItem('hylten_lang', newLang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
    setLang(newLang);
  };

  const t = (key: TranslationKeys) => getTranslation(key, lang);

  return { lang, changeLanguage, t };
}
