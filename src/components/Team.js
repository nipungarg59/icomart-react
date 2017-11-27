import React from 'react'
import './Team.css'

const getRandomTeamClass =()=> {
  let num = Math.floor(Math.random()*10)%3
  if(num===0) {
    return "teamy teamy_style1 teamy_mask-circle teamy_zoom-photo"
  }
  else if(num===1) {
    return "teamy teamy_style1 teamy_mask-circle teamy_zoom-rotate-photo" 
  }
  else {
    return "teamy teamy_style1 teamy_mask-circle teamy_zoom-slide-photo"
  }
}

const Team = ({ data }) => (
  <div id="team">
    <div className="page">
      <div className="page__demo">
      

        <section className="section">
          <div className="main-container">
            <header className="section__header">
              <h2><span className="highlight_secondary">Our</span> Team</h2>
            </header>
            <div className="section__content teamy-team">

                {
                  data.length ?
                    data.map((member, i) =>
                      <article className={getRandomTeamClass()}>
                        <div className="teamy__layout">
                          <div className="teamy__preview">
                            <img src={member.image_url} className="teamy__avatar" alt={member.name}/>
                          </div>
                          <div className="teamy__back">
                            <div className="teamy__back-inner">
                              <div className="about">{member.description}</div>
                              {
                                member.linkedin_url ?
                                  <a href={member.linkedin_url} className="social">
                                    <i className="fa fa-linkedin fa-2x social__icon" aria-hidden="true"></i>
                                    <span className="social__name">LinkedIn</span>
                                  </a> :
                                  <span/>
                              }
                              {
                                member.twitter_url ?
                                  <a href={member.twitter_url} className="social">
                                    <i className="fa fa-twitter social__icon fa-2x" aria-hidden="true"></i>
                                    <span className="social__name">Twitter</span>
                                  </a>:
                                  <span/>
                              }
                              {
                                member.github_url ?
                                  <a href={member.github_url} className="social">
                                    <i className="fa fa-github fa-2x social__icon" aria-hidden="true"></i>
                                    <span className="social__name">Github</span>
                                  </a>:
                                  <span/>
                              }
                              {
                                member.facebook_url ?
                                  <a href={member.facebook_url} className="social">
                                    <i className="fa fa-facebook fa-2x social__icon" aria-hidden="true"></i>
                                    <span className="social__name">Facebook</span>
                                  </a>:
                                  <span/>
                              }
                            </div>
                          </div>
                        </div>
                        <div className="teamy__content">
                          <h3 className="teamy__name">{member.name}</h3>
                          <span className="teamy__post">{member.designation}</span>
                        </div>
                      </article>
                    ):    
                    <h3>Not Found</h3>
                }
            </div>
          </div>
        </section>

        

        
      </div>
    </div>

  </div>
)

export default Team
