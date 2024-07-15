import React from 'react'
import { Link } from 'react-router-dom'
import './Categorysection.css'
import BusinessCard from './BusinessCard'

function Categorysection() {
    return (
        <div className="business_section">
            <div className="business_content">
               <div className="page_location"><Link to=''>Home</Link> &gt; Search &gt; <span>Automotive</span></div> 
               <div className="result_heading">Showing Results for <span>Automotive</span></div>
               <div className="business_cards_ads">
                <div className="business_cards">
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                </div>
                <div className="business_ads">
                    <img src="https://s3-alpha-sig.figma.com/img/7a64/2d64/50cbcda6ba1f8caa4f62d93aa7092ded?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi0Iob4v6wsGfPu7udISdjXIBcYY~Vu213sW9KtTTJmpW7WBPzWa3S9mN907Q3NMMwIIS8drf7z8tdGR1cLeIG7Smt99yPyOgFZKA5gcDIpunhqidmcZr1HcvcPqsqICEAwRmXTzJqYeIIBUI3nkOhKagh49G0CIbbVuJ5KD63HgSxUfclO-dZqics~3rhhh-cRrMcrcZdHss-F8INXbA5zO6lnTdp2A6bGF7Qal7cYLU06j6eMzGgNeRvWQbylNHfWeiD74SxjNkKQftPdRtkSbn5HffEEsjsmenK4eV5xZuElareJHtpG3tAQjOmAOKtsUJCerSRbOWnANP0~OyA__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/ffa1/376a/90ab27f8e0505303aa5995eabbbf6989?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gt21K-RYDDDnReH3og-tviLkE1nse5CtU93M9eRxq1fJYafEKF0Qi369K0cp~jzK9O45~mHvu1tBtk5wkJZ71DZbisscUbN4LouVzdN62cTsMd8EdzaVkaAHsxVNfbP4gBOeS5HP0uhpPy~Py9CDFrdLhbZSmN0YCtZ-QwaICP3jCj3lB1-VTNEDhDVCq~Z5tiIu9lmeuSirpRaeJkDILZYRV~a5gmgKj4AuCRh0b0PY-hMHNGFtxTLJX7DLlGLzHB2ypVsSopG6qX-8o0HRMlt~DlmOlBc1BNK7AHjlY0-BNp6lJ6YLNR6o33x40mGkYIT7H-PsfH-vvGNuefKK-g__" alt="" /><img src="https://s3-alpha-sig.figma.com/img/7a64/2d64/50cbcda6ba1f8caa4f62d93aa7092ded?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi0Iob4v6wsGfPu7udISdjXIBcYY~Vu213sW9KtTTJmpW7WBPzWa3S9mN907Q3NMMwIIS8drf7z8tdGR1cLeIG7Smt99yPyOgFZKA5gcDIpunhqidmcZr1HcvcPqsqICEAwRmXTzJqYeIIBUI3nkOhKagh49G0CIbbVuJ5KD63HgSxUfclO-dZqics~3rhhh-cRrMcrcZdHss-F8INXbA5zO6lnTdp2A6bGF7Qal7cYLU06j6eMzGgNeRvWQbylNHfWeiD74SxjNkKQftPdRtkSbn5HffEEsjsmenK4eV5xZuElareJHtpG3tAQjOmAOKtsUJCerSRbOWnANP0~OyA__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/ffa1/376a/90ab27f8e0505303aa5995eabbbf6989?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gt21K-RYDDDnReH3og-tviLkE1nse5CtU93M9eRxq1fJYafEKF0Qi369K0cp~jzK9O45~mHvu1tBtk5wkJZ71DZbisscUbN4LouVzdN62cTsMd8EdzaVkaAHsxVNfbP4gBOeS5HP0uhpPy~Py9CDFrdLhbZSmN0YCtZ-QwaICP3jCj3lB1-VTNEDhDVCq~Z5tiIu9lmeuSirpRaeJkDILZYRV~a5gmgKj4AuCRh0b0PY-hMHNGFtxTLJX7DLlGLzHB2ypVsSopG6qX-8o0HRMlt~DlmOlBc1BNK7AHjlY0-BNp6lJ6YLNR6o33x40mGkYIT7H-PsfH-vvGNuefKK-g__" alt="" />
                </div>
               </div>
               
            </div>
            <div className="category_ads">

            </div>
        </div>
    )
}

export default Categorysection
