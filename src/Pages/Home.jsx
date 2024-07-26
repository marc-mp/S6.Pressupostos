import fondoHome from '/fondoHome.jpeg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


export default function Home(){
    
    const [tituloHome, setTituloHome] = useState("Presupuestos Web");
    
    return (
        <div>
            <div>
                <Menu/>
            </div>
            <div className="h-40 flex items-center justify-center mt-10 mb-10 mx-28" 
                style={{backgroundImage: `url(${fondoHome})`}} 
                alt= "fondo titulo calculadora">
                <h1 className='text-5xl font-semibold'>{tituloHome}</h1>    
            </div> 
            <div className="font-semibold text-xl flex items-center justify-center mb-20 mx-28">
                <h3>Evita sorpresas con nuestra calculadora de presupuestos online. No todos los negocios necesitan lo mismo, ni todas las webs cuestan lo mismo. Ahorra y paga sólo en función de las características que necesitas con nuestra calculadora de presupuestos para diseño web.</h3>
            </div>
            <div className='grid grid-cols-2 items-center mx-28'>
                <div className='flex justify-center'>
                    <img src="../public/click.jpg" alt="mobil click" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-left flex '>Obtén presupuestos fácilmente y ahorra tiempo</h1>
                    <p>Explica tu necesidad en pocos clics. Obtén presupuestos personalizados en pocos minutos</p>
                </div>
            </div>
            <div className='grid grid-cols-2 items-center mx-28 '>
                <div className='text-center'> 
                    <h1 className='font-bold text-2xl flex justify-center '>Una amplia gama de servicios</h1>
                    <p>Ofrecemos una amplia gama de servicios de alta calidad profesional.</p>
                </div>
                <div className='flex justify-center'>
                    <img src="../public/desarrollo-servicios-web.png" alt="servicios" />
                </div>
            </div>
            <div className='grid grid-cols-2 items-center mx-28 '>
                <div>
                    <img src="../public/calcular-presupuesto.webp" alt="presupuesto" />
                </div>
                <div className='justify-center ms-28'>
                    <h3 className='font-bold text-2xl text-center flex justify-start mb-5'>¡Calcula ahora tu precio web!</h3>
                    <nav>
                    <Link to={"/App"}>
                        <button className='border-2 border-gray-500 font-bold text-2xl text-white bg-blue-500 h-16 w-44 rounded-lg ms-20' >Calculadora
                        </button>
                    </Link>
                    </nav>
                    
                </div>
            </div>
            
        </div>
    )
}


