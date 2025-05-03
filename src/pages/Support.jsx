import React, { useState } from 'react';
import { FaHeadphones, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

// Support component with 3 expandable help sections
const Support = () => {
  const [activeSection, setActiveSection] = useState(null);       // Tracks which main card is open
  const [openQuestion, setOpenQuestion] = useState(null);         // Tracks open FAQ question in section 2
  const [openDoc, setOpenDoc] = useState(null);                   // Tracks open question in documentation
  const [openContact, setOpenContact] = useState(null);           // Tracks open question in contact section

  // Toggle main card section (only one open at a time)
  const handleToggle = (section) => {
    setActiveSection(prev => prev === section ? null : section);
    setOpenQuestion(null);
    setOpenDoc(null);
    setOpenContact(null);
  };

  return (
    <>
      <div className="background"></div>

      <div className="support-page">
        <h1 className="support-title">هل تحتاج إلى مساعدة؟ نحن هنا لمساعدتك!</h1>

        <div className="support-cards">

          {/* Documentation and help section */}
          <div className="support-card">
            <div className="icon-wrapper"><FaFileAlt className="icon" /></div>
            <h2>المساعدة والتوثيق</h2>
            <p>تعرّف على كيفية استخدام المنصة، والإبلاغ عن المفقودات، واسترجاعها بسهولة.</p>
            <button onClick={() => handleToggle('docs')}>اقرأ المزيد</button>
            {activeSection === 'docs' && (
              <div className="faq-section">
                {[
                  { q: "كيف أستخدم المنصة؟", a: "يمكنك التنقل بين الصفحات، ثم اختيار (الإبلاغ عن المفقودات)، تعبئة النموذج، وإرفاق صورة، ثم الضغط على إرسال." },
                  { q: "هل يمكن تعديل البلاغ بعد الإرسال؟", a: "لا يمكن حاليًا تعديل البلاغ من الواجهة، لكن يمكنك التواصل مع الدعم الفني لحذفه أو تعديله." },
                  { q: "هل الصور إلزامية؟", a: "الصور غير إلزامية، لكنها تسهّل التعرف على المفقودات بشكل كبير." }
                ].map((item, i) => (
                  <div key={i} className={`faq-card ${openDoc === i ? 'open' : ''}`}>
                    <div className="faq-question" onClick={() => setOpenDoc(openDoc === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className={`arrow ${openDoc === i ? 'rotate' : ''}`}>⌄</span>
                    </div>
                    {openDoc === i && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Frequently Asked Questions section */}
          <div className="support-card">
            <div className="icon-wrapper"><FaQuestionCircle className="icon" /></div>
            <h2>الأسئلة الشائعة</h2>
            <p>إجابات على الأسئلة الأكثر شيوعًا حول كيفية استخدام منصة مُسترد.</p>
            <button onClick={() => handleToggle('faq')}>اقرأ المزيد</button>
            {activeSection === 'faq' && (
              <div className="faq-section">
                {[
                  { q: "كيف أبلّغ عن غرض مفقود؟", a: "من خلال صفحة الإبلاغ، اختر النوع واملأ النموذج وأرفق الصورة ثم أرسل." },
                  { q: "هل أحتاج لتسجيل دخول؟", a: "نعم، الخدمة متاحة فقط لمنسوبي جامعة الملك عبدالعزيز عبر الدخول الموحد." },
                  { q: "متى يظهر الغرض في صفحة المفقودات؟", a: "يظهر فور الإرسال، ويُعرض تلقائيًا في صفحة المفقودات." }
                ].map((item, i) => (
                  <div key={i} className={`faq-card ${openQuestion === i ? 'open' : ''}`}>
                    <div className="faq-question" onClick={() => setOpenQuestion(openQuestion === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className={`arrow ${openQuestion === i ? 'rotate' : ''}`}>⌄</span>
                    </div>
                    {openQuestion === i && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technical Support section */}
          <div className="support-card">
            <div className="icon-wrapper"><FaHeadphones className="icon" /></div>
            <h2>الدعم الفني والتواصل</h2>
            <p>إذا لم تجد حلًا لمشكلتك، يمكنك التواصل مع فريق الدعم عبر الطرق التالية:</p>
            <button onClick={() => handleToggle('contact')}>تواصل معنا</button>
            {activeSection === 'contact' && (
              <div className="faq-section">
                {[
                  { q: "كيف أتواصل مع فريق الدعم؟", a: "يمكنك مراسلتنا عبر البريد الإلكتروني الرسمي support@mostarad.com." },
                  { q: "ما أوقات استقبال الاستفسارات؟", a: "نعمل من الأحد إلى الخميس، من الساعة 9 صباحًا حتى 5 مساءً." },
                  { q: "أين يقع مكتب الدعم؟", a: "نقع في مركز تقنية المعلومات - جامعة الملك عبدالعزيز." }
                ].map((item, i) => (
                  <div key={i} className={`faq-card ${openContact === i ? 'open' : ''}`}>
                    <div className="faq-question" onClick={() => setOpenContact(openContact === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className={`arrow ${openContact === i ? 'rotate' : ''}`}>⌄</span>
                    </div>
                    {openContact === i && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Support;
