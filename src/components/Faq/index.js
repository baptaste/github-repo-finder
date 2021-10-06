import React from 'react';

const Faq = () => (
  <ul className="faq">
    <h1 className="faq__title">FAQ</h1>
    <li className="faq__block">
      <p className="faq__question">A quoi ça sert ?</p>
      <p className="faq__anwser">Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>
    </li>
    <li className="faq__block">
      <p className="faq__question">Comment faire une recherche ?</p>
      <p className="faq__anwser">Sur la page recherche, complétez le champ de recherche et validez la recherche.</p>
    </li>
    <li className="faq__block">
      <p className="faq__question">Puis-je chercher n'importe quel terme ?</p>
      <p className="faq__anwser">Oui, c'est fou.</p>
    </li>
  </ul>
);

export default Faq;
