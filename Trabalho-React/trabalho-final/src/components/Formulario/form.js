import React from "react";


export const Formu = () => {
    return (<>

        <section class="mb-6">


            <h2 class="h1-responsive font-weight-bold text-center my-4">Fale Conosco</h2>

            <p class="text-center w-responsive mx-auto mb-5">Como podemos te ajudar? Entre em contato conosco para que nosso time possa te auxiliar. É rápido, prático e fácil!</p>

            <div class="row">


                <div >
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                        <div class="row">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="name" class="">Nome</label>
                                    <input type="text" id="name" name="name" class="form-control" />

                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">E-mail</label>
                                    <input type="text" id="email" name="email" class="form-control" />

                                </div>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="subject" class="">Assunto</label>
                                    <input type="text" id="subject" name="subject" class="form-control" />

                                </div>
                            </div>
                        </div>



                        <div class="row">


                            <div class="col-md-12">

                                <div class="md-form">
                                    <label for="message">Menssagem</label>
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>

                                </div>

                            </div>
                        </div>


                    </form>

                    <div class="text-center text-md-left">
                        <button type="button" class="btn bt btn-outline-primary">Enviar</button>
                        {/*<a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>*/}
                    </div>
                    <div class="status"></div>
                </div>


            </div>

        </section>

    </>)
}