import "@/src/app/scss/index.scss";
import Image from "next/image";
import Navbar from "../sections/Navbar";

export default function Projetos() {
    return(
        <main className="projects">
            <Navbar/>
            <h1 className="projects-title">Meus projetos pessoais ou que estou desenvolvendo</h1>
            <div className="projects-grid">
                <div className="projects-grid-box">
                    <Image className="projects-grid-box-image" src={"/images/DespesasMobile.png"} alt={"Imagem do despesasMobile"} width={400} height={200}></Image>
                    <div className="projects-grid-box-wrapper">
                        <h2 className="projects-grid-box-wrapper-subtitle">Despesas Mobile</h2>
                        <p className="projects-grid-box-wrapper-text">Um simples projeto para controle de despesas que fiz para os meus pais. Ele permite registrar e acompanhar as despesas diárias assim como os seus ganhos</p>
                        <a className="projects-grid-box-wrapper-link" href="https://github.com/Tardis2001/DespesasMobile">
                            <button className="projects-grid-box-wrapper-link-button">Ver mais</button>
                        </a>
                    </div>
                </div>
                <div className="projects-grid-box">
                    <Image className="projects-grid-box-image" src={"/images/MeuWebsite.png"} alt={"Imagem do meu website"} width={400} height={200}></Image>
                    <div className="projects-grid-box-wrapper">
                        <h2 className="projects-grid-box-wrapper-subtitle">Meu website</h2>
                        <p className="projects-grid-box-wrapper-text">Esse é o meu website que eu uso como blog alem de ser um portfolio também. Nele, compartilho minhas experiências, tutoriais e dicas sobre desenvolvimento de software, além de outros assuntos relacionados à tecnologia.</p>
                        <a className="projects-grid-box-wrapper-link" href="https://matheusevangelista.vercel.app">
                            <button className="projects-grid-box-wrapper-link-button">Ver mais</button>
                        </a>
                    </div>
                </div>
                <div className="projects-grid-box">
                    <Image className="projects-grid-box-image" src={"/images/AtelierehLandingPage.png"} alt={"Imagem de uma landing page"} width={400} height={200}></Image>
                    <div className="projects-grid-box-wrapper">
                        <h2 className="projects-grid-box-wrapper-subtitle">Atelie Reh Artes Landing Page</h2>
                                <p className="projects-grid-box-wrapper-text">Essa é uma landing page feita para a empresa da minha mãe chamada de atelie reh artes</p>
                                <a className="projects-grid-box-wrapper-link" href="https://atelierehartes.vercel.app/">
                                    <button className="projects-grid-box-wrapper-link-button">Ver mais</button>
                                </a>
                            </div>
                        </div>
                        <div className="projects-grid-box">
                            <Image className="projects-grid-box-image" src={"/images/reformatruckevangelista.png"} alt={"Imagem de uma landing page"} width={400} height={200}></Image>
                            <div className="projects-grid-box-wrapper">
                                <h2 className="projects-grid-box-wrapper-subtitle">Reforma Truck Evangelista</h2>
                                <p className="projects-grid-box-wrapper-text">Essa é uma landing page feito para o meu pai chamado reforma truck</p>
                                <a className="projects-grid-box-wrapper-link" href="https://reformatruckevangelista.vercel.app">
                                    <button className="projects-grid-box-wrapper-link-button">Ver mais</button>
                                </a>
                            </div>
                        </div>
                        <div className="projects-grid-box">
                            <Image className="projects-grid-box-image" src={"/images/TodoListDjango.png"} alt={"Lista de afazeres feito em django"} width={400} height={200}></Image>
                            <div className="projects-grid-box-wrapper">
                                <h2 className="projects-grid-box-wrapper-subtitle">TodoListDjango</h2>
                                <p className="projects-grid-box-wrapper-text">Esse é uma lista de afazeres feito em django</p>
                                <a className="projects-grid-box-wrapper-link" href="https://github.com/Tardis2001/todolist-django">
                                    <button className="projects-grid-box-wrapper-link-button">Ver mais</button>
                                </a>
                            </div>
                        </div>
            </div>

    <div className="stars">
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
</div>
        </main>
    )
}
