import React from 'react'
import LogoNbStyle from "../../assets/images/LogoNbStyle.jpg"
import tiktok from '../../assets/images/tiktok-chico.png'
import instagram from '../../assets/images/instagram-chico.png'
import facebook from '../../assets/images/facebook-chico.png'
import "./estilofoter.css"


export const Footer = () =>{
    return (
    <footer className="containerFooter">
        <img src={LogoNbStyle} className="fotoFooter" id='logoFooter' alt="NbStyle" />
        
        <div className="redesFooter">
            <p className="puertoFooter">Seguinos en nuestras Redes Sociales</p>
            <div id="containerRedesFooter">
                <a href="https://www.tiktok.com/@nbstyleok?lang=es" target="_blank" rel='noreferrer' id="tiktok"><img src={tiktok} alt="TikTok" /></a>
                
                <a href="https://www.instagram.com/nbstyleok/" target="_blank" rel='noreferrer' id="ig"><img src={instagram} alt="Instagram" /></a>
                
                <a href="https://www.facebook.com/nbstyleok" target="_blank" rel='noreferrer' id="fb"><img src={facebook} alt="Facebook" /></a>
            </div>
        </div>
        
        <p className="copyrightFooter">Argentina, Buenos Aires ©2023 Nb Style. Todos los derechos reservados. Hecho por Facundo Marco Bacigalupo</p>
    </footer>
    )
}


export default Footer