import React, { Component } from 'react'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:'The pain itself, the pain will be intensified. Other nasty people?'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                  "The pain itself, the pain will be intensified. Other nasty people?"
              },
              {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                  "The pain itself, the pain will be intensified. Other nasty people?"
              },
              {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                  "The pain itself, the pain will be intensified. Other nasty people?"
              }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}
