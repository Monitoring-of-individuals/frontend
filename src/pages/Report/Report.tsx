import React, { FC, useRef } from 'react';
import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import './Report.css';
import '../../components/Page/page.css';


const Report: FC = (): React.ReactElement => {
  const pdfRef = useRef(null);

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('report.pdf');
      });
    }
  };

  return (
    <section className='report'>
      <div className='report__container' ref={pdfRef}>
        <div className='report__section-data'>
          <h2 className='report__title'>Данные проверяемого</h2>
          <div className='report__subsection'>
            <h3 className='report__subtitle'>Петров Василий Иванович</h3>
            <ul className='report__info'>
              <li className='report__info-text'>Дата рождения</li>
              <li className='report__info-data'>12.01.1974</li>
            </ul>
            <ul className='report__info'>
              <li className='report__info-text'>Возраст</li>
              <li className='report__info-data'>50 лет</li>
            </ul>
            <ul className='report__info'>
              <li className='report__info-text'>Паспорт</li>
              <li className='report__info-data'>7684 896330</li>
            </ul>
            <ul className='report__info'>
              <li className='report__info-text'>Водительское удостоверение</li>
              <li className='report__info-data'>63 93 970976</li>
            </ul>
            <ul className='report__info'>
              <li className='report__info-text'>Дата выдачи водительского удостоверения</li>
              <li className='report__info-data'>11.09.2015</li>
            </ul>
          </div>
        </div>

        <div className='report__section-check'>
          <h2 className='report__title'>Результат проверки</h2>
          <div className='report__subsection'>
            <h3 className='report__subtitle-attention'>
              Обратите внимание <span className='report__span' />
            </h3>
            <ul className='report__info-attention'>
              <li className='report__info-text'>Исполнительное производство</li>
              <li className='report__info-data-no-risk'>Найдено</li>
            </ul>
            <h3 className='report__subtitle-attention'>
              Рисков не выявлено <span className='report__span-ok' />
            </h3>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>Паспорт</li>
              <li className='report__info-data-no-risk'>Действителен</li>
            </ul>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>ИНН</li>
              <li className='report__info-data-no-risk'>648394753974</li>
            </ul>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>Самозанятость</li>
              <li className='report__info-data-no-risk'>Найдено</li>
            </ul>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>Банкротство</li>
              <li className='report__info-data-no-risk'>Не найдено</li>
            </ul>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>Штрафы ГИБДД</li>
              <li className='report__info-data-no-risk'>Не найдено</li>
            </ul>
            <ul className='report__info-no-risk'>
              <li className='report__info-text-no-risk'>Террористы и экстремисты</li>
              <li className='report__info-data-no-risk'>Не найдено</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='report__btn-container'>
        <button type='submit' className='report__btn' onClick={handleDownloadPDF}>
          Скачать PDF
        </button>
        <button type='submit' className='report__btn-new'>
          Новый отчет
        </button>
      </div>
    </section>
  );
};

export default Report;
