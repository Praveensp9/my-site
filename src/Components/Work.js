import React, { Component } from 'react';

class Work extends Component {
  render() {

    if(this.props.data){
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><a  href={work.href} target="_blank"> <h3>{work.company}</h3> </a>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="edu">{work.description}</p>
        </div>
      })
    }

    return (
      <section id="experience">


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
   </section>
    );
  }
}

export default Work;
