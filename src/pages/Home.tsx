import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import StoryCard from "../components/StoryCard";


function Home() {


    const historias = [

        {
            id: "carretera-kilometro-17",

            image:
            "https://images.unsplash.com/photo-1509248961158-e54f6934749c",

            title:
            "La carretera del kilómetro 17",

            description:
            "Un conductor asegura haber visto una figura desconocida en una carretera abandonada durante la madrugada."
        },


        {
            id: "habitacion-nadie-usa",

            image:
            "https://imgs.search.brave.com/QVS88WoKDKCgM_8XOkYAx9wCQz6KWUOAnuzV8b7Jtoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyLzg5/LzYxL2UyODk2MTc2/MTlkZjY0NDQ0NjQ3/YTEzZDQ4MTM3MGI0/LmpwZw",

            title:
            "La habitación que nadie usa",

            description:
            "Una habitación cerrada durante años guarda un misterio que nadie se atreve a investigar."
        }

    ];



    return (

        <main>


            <Hero />


            <section>

                <h2>
                    ¿Qué son los fenómenos paranormales?
                </h2>


                <p>
                    Los fenómenos paranormales son sucesos que parecen
                    no tener una explicación dentro del conocimiento
                    científico actual. Apariciones, sonidos extraños,
                    lugares con actividad inexplicable y experiencias
                    reportadas por personas forman parte de estos relatos.
                </p>


                <p>
                    En este archivo recopilamos historias y leyendas
                    para explorar los misterios que rodean al mundo.
                </p>


            </section>



            <section>


                <h2>
                    Historias destacadas
                </h2>



                {
                    historias.map((historia) => (

                        <div key={historia.id}>


                            <StoryCard

                                image={historia.image}

                                title={historia.title}

                                description={historia.description}

                            />



                            <Link 
                                to={`/historia?id=${historia.id}`}
                            >

                                <button>

                                    Leer historia

                                </button>


                            </Link>


                        </div>

                    ))
                }



                <br />


                <Link to="/historias">

                    <button>

                        Explorar archivos

                    </button>

                </Link>



            </section>



            <section>


                <h2>
                    Investigación paranormal
                </h2>



                <iframe

                    width="100%"

                    height="400"

                    src="https://youtu.be/bYQOQhQWktI?si=3m8cendPg5T_IaYJ"

                    title="Investigación paranormal"

                    allowFullScreen

                ></iframe>



            </section>



        </main>

    );

}


export default Home;