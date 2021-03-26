import React from "react";

const SingleItem = (props) => {
  const item = props.location.state;
  return (
    <div>
      <div className="singleItemPage">
        <div>
          <img src={item.src} alt="" />
        </div>
        <div className="desc">
          <p>{item.title}</p>
          <button>Add to Cart</button>
          <button>Pay with Google</button>
          <p>
            Internationaler Kalender im Taschenformat mit
            Zipp-Reißverschluss-Hülle, in der sich z.B. Stifte oder
            Visitenkarten verstauen lassen. Der hübsche Kalender beginnt mit
            September 2019 und geht bis Dezember 2021. Eine Doppelseite pro
            Woche und monatliche Übersichten erleichtern das Planen. Es gibt
            auch genug Platz für Notizen. - Größe: 14,5 x 10 cm - Seiten: 224 -
            2 Lesezeichen - Hergestellt in Japan
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
