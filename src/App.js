
import './App.scss';
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle} from 'react-icons/io5';
import {IconContext} from "react-icons"

function App() {
  return (
    <>
      <header >
                <div className="logo_wrapper">SOM</div>
                <div className="menu_container">
                    <span>
                      <IconContext.Provider value={{color:"#000",size:"18px", className:"icon_container"}}>
                      <div className='icon'><FaBehance/> </div>
                      <div className='icon'><FaDribbble/> </div>
                      </IconContext.Provider>
                    </span>
                    <span>
                    <IconContext.Provider value={{color:"#000",size:"18px" }}>
                      <div className='icon'><IoMailOutline/>sheetal@schoolofmasters.co.in </div>
                      </IconContext.Provider>
                    </span>
                    <span className='menu'>
                    
                      <span></span>
                      <span></span>
                      <span></span>

                    </span>
                </div>
      </header>

      <div className='constent_wrapper'>
        <div className='left_content_wrapper'>
          <h2>
            <span>Navigating the Path to </span>
            <span>Corporate Excellence</span>
            </h2>
            <p>
            Unlock the potential with experts specializing in <br />corporate training, strategic recruitments, and personalized 1-to-1 training .
            </p>
            <div className="btn_group"></div>
              <div className='btn btn_primary'>Lets Connect
              <IconContext.Provider value={{color:"#14da84",size:"25px" }}>
                     <IoChevronForwardCircle/>
                      </IconContext.Provider>
              </div>
            <span></span>


          </div>  
         </div>
        <div className='left_content_wrapper'>
        </div>
    </>
  );
}

export default App;
