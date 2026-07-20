function CommentForm(){

    return (

        <section className="comment-form">

            <h2>
                Deja tu comentario
            </h2>


            <input 
                type="text"
                placeholder="Tu nombre"
            />


            <textarea
                placeholder="Escribe tu experiencia..."
            />


            <button>
                Publicar comentario
            </button>


        </section>

    );

}

export default CommentForm;