import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const ButtonGroup = styled.div`
  margin-bottom: 60px;
 
`

const BackgroundColor = styled.div`
    background: -moz-linear-gradient(to bottom, #FFFFFF, #94f631);
    background: linear-gradient(to bottom, #FFFFFF, #94f631);
`

const NameContainer = styled.div`
   border: solid #c9c1c1 1px;
   border-radius: 5px;
   text-align: center;
   padding: 0;
   margin-bottom: 40px;
`

const WineName = styled.h4`
    color: #0e3102;
    margin: 0;
    padding: 10px;
`

function Wine(props) {


    const whiteWine = ['assyrtiko', 'pinot_blanc', 'cortese', 'roussanne', 'moschofilero', 'muscadet', 'viognier',
     'verdicchio', 'greco', 'marsanne', 'white_burgundy', 'chardonnay', 'gruener_veltliner', 'white_rioja',
     'frascati', 'gavi', 'l_acadie_blanc', 'trebbiano', 'sauvignon_blanc', 'catarratto', 'albarino', 'arneis',
     'verdejo', 'vermentino', 'soave', 'pinot_grigio', 'dry_riesling', 'torrontes', 'mueller_thurgau', 'grechetto',
     'gewurztraminer', 'chenin_blanc', 'white_bordeaux', 'semillon', 'riesling', 'sauternes', 'sylvaner', 'lillet_blanc']

    const redWine = ['petite_sirah', 'zweigelt', 'baco_noir', 'bonarda', 'cabernet_franc', 'bairrada', 'barbera_wine',
      'primitivo', 'pinot_noir', 'nebbiolo', 'dolcetto', 'tannat', 'negroamaro', 'red_burgundy', 'corvina',
      'rioja', 'cotes_du_rhone', 'grenache', 'malbec', 'zinfandel', 'sangiovese', 'carignan', 'carmenere', 'cesanese',
      'cabernet_sauvignon', 'aglianico', 'tempranillo', 'shiraz', 'mourvedre', 'merlot', 'nero_d_avola', 'bordeaux',
      'marsala', 'port', 'gamay', 'dornfelder', 'concord_wine', 'sparkling_red_wine', 'pinotage', 'agiorgitiko']

     const desertWine = ['pedro_ximenez', 'moscato', 'late_harvest', 'ice_wine', 'white_port', 'lambrusco_dolce',
        'madeira', 'banyuls', 'vin_santo', 'port', 'cava', 'cremant', 'champagne', 'prosecco', 'spumante', 'cream_sherry',
         'dry_sherry', 'dry_vermouth']

    const [wineList, setWineList] = useState([]);

    useEffect(() => {
        setWineList(wineList);
    }, [wineList]);




    return (
        <>
        <BackgroundColor>

            <ButtonGroup className="pagination justify-content-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-success" onClick={() => setWineList(whiteWine)}>White</button>
                    <button type="button" className="btn btn-outline-success" onClick={() => setWineList(redWine)}>Red</button>
                    <button type="button" className="btn btn-outline-success" onClick={() => setWineList(desertWine)}>Dessert</button>
                </div>
            </ButtonGroup>

            <div className='container'>
                <div className='row'>
                {wineList.map((wine, index) => {
                    return <NameContainer className='col-6'>
                        <Link to={`/wine/${wine}`}>
                            <WineName id={index}
                                                 onMouseOver={() => {
                                                        document.getElementById(index).style.color = '#fff';
                                                        document.getElementById(index).style.backgroundColor = "#289341";
                                                 }}
                                                 onMouseOut={() => {
                                                         document.getElementById(index).style.color = "#0a043c";
                                                         document.getElementById(index).style.backgroundColor = "initial";
                                                 }}
                                                 key={index}>{wine.replace("_", " ").charAt(0).toUpperCase()+wine.replace("_", " ").slice(1)}
                            </WineName>
                        </Link>
                         </NameContainer>
                })}
                </div>
            </div>
        </BackgroundColor>

            </>
    );
}

export default Wine;