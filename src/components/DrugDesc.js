import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../Data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DrugDesc = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const { drugName } = useParams();
  const firstBold = (string) => {
    return <span className='firstWord'>{string.split(' ')[0]}</span>;
  }
  function restSentence(str) {
    const word = str.indexOf(' ');
    
    if (word === -1) {
      return '';
    }
    return str.substring(word);
  }
  useEffect(() => {
    document.title = drugName;
  });
  return (
    <>
    
      {
        DATA.filter((val) => {
          if (drugName === "") {
            return 0;
          } else if (val.drug_name.toLowerCase().includes(drugName.toLowerCase())) {
            return val;
          }return 0;
        }).map((val, key) => {
          return (
            <>
              <div key={key} className="container Description-page mt-5">
                {val.drug_name && <h2 className='text-center'>{val.drug_name}</h2>}
                {val.Botanical_name && <h4 className='text-center fw-light'>{val.Botanical_name}</h4>}
                <div className="row mt-5">
                  {val.Description && <div className="col-md-5 drug-description" data-aos="fade-right" data-aos-duration="1000">
                  <h3>Description:</h3>
                  {val.Description}
                  </div>}
                  {(val.image && val.Description) && <div className="col-md-7 drug-image" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                    <img src={val.image} alt={val.drug_name} />
                  </div>}
                </div>

                {/* Synonymns start */}
                {val.Synonymns && <div className="card mt-3" style={{ backgroundColor: "#74f9e0" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Synonymns
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      {val.Synonymns.map((v, k) => {
                        return (
                          <p key={k}>{firstBold(v)}{restSentence(v)}</p>
                        )
                      })}
                    </blockquote>
                  </div>
                </div>}
                {/* Synonymns end */}

                {/* Classification start */}
                {val.Classification && <div className="card mt-3" style={{ backgroundColor: "#07dd7a" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Classification
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Classification.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Classification end */}

                {/* Types start */}
                {val.Types && <div className="card mt-3" style={{ backgroundColor: "#07cedd" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Types
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Types}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Types end */}

                {/* Habitat start */}
                {val.Habitat && <div className="card mt-3" style={{ backgroundColor: "#ef3dff" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Habitat
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Habitat}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Habitat end */}

                {/* Habit start */}
                {val.Habit && <div className="card mt-3" style={{ backgroundColor: "#ff5555" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Habit
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Habit}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Habit end */}

                {/* Morphology start */}
                {val.Morphology && <div className="card mt-3" style={{ backgroundColor: "#6dff2a" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Morphology
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Morphology.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Morphology end */}

                {/* Useful_part start */}
                {val.Useful_part && <div className="card mt-3" style={{ backgroundColor: "#e3ff30" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Useful part
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Useful_part}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Useful_part end */}

                {/* Phytoconstituents start */}
                {val.Phytoconstituents && <div className="card mt-3" style={{ backgroundColor: "#757cfd" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Phytoconstituents
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Phytoconstituents}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Phytoconstituents end */}

                {/* Rasapanchaka start */}
                {val.Rasapanchaka && <div className="card mt-3" style={{ backgroundColor: "#57fb9d" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Rasapanchaka
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      {val.Rasapanchaka.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}
                    </blockquote>
                  </div>
                </div>}
                {/* Rasapanchaka end */}

                {/* Karma start */}
                {val.Karma && <div className="card mt-3" style={{ backgroundColor: "#ffbe52" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Karma
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Karma}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Karma end */}

                {/* Agrya_karma start */}
                {val.Agrya_karma && <div className="card mt-3" style={{ backgroundColor: "#5edd07" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Agrya karma
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p style={{ fontWeight: "bolder" }}>{val.Agrya_karma}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Agrya_karma end */}

                {/* Therapeutic_indication start */}
                {val.Therapeutic_indication && <div className="card mt-3" style={{ backgroundColor: "#ff5bc8" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Therapeutic indication
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Therapeutic_indication}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Therapeutic_indication end */}

                {/* Amayika_Prayoga start */}
                {val.Amayika_Prayoga && <div className="card mt-3" style={{ backgroundColor: "#f3f964" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Amayika Prayoga
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      {val.Amayika_Prayoga.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}
                    </blockquote>
                  </div>
                </div>}
                {/* Amayika_Prayoga end */}

                {/* Dose start */}
                {val.Dose && <div className="card mt-3" style={{ backgroundColor: "#ff5f5f" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Dose
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      <p>{val.Dose.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}</p>
                    </blockquote>
                  </div>
                </div>}
                {/* Dose end */}

                {/* Yoga_formulation start */}
                {val.Yoga_formulation && <div className="card mt-3" style={{ backgroundColor: "#6784ff" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Yoga formulation
                  </div>
                  <div className="card-body ">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      {val.Yoga_formulation.map((v, k) => {
                        return (
                          <p key={k}>{v}</p>
                        )
                      })}
                    </blockquote>
                  </div>
                </div>}
                {/* Yoga_formulation end */}

                {/* Shlok start */}
                {val.Shlok && <div className="card mt-3 mb-3" style={{ backgroundColor: "#4fff69" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <div className="card-header fw-bold" style={{ borderBottom: "2px solid rgba(0,0,0,.125)" }}>
                    Shlok
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0" style={{ marginTop: "-5px" }}>
                      {val.Shlok.map((v, k) => {
                        return (
                          <p key={k} style={{ fontWeight: "bolder" }}>{v}</p>
                        )
                      })}
                    </blockquote>
                  </div>
                </div>}
                {/* Shlok end */}
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default DrugDesc