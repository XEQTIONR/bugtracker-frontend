import React  from 'react';
import Login from "../modules/Login";
// import Nav from "../Nav";

function UserHomePage(props) {

    return (
      <div className="pt-5" style={{minHeight: '100vh', transition: '.5s' ,marginLeft: props.sidebarState ? '300px' : '75px'}}>
      {/* <Nav />   */}
      <div className="row mx-0">
        <div className="col-12">
            <h6>something</h6>

<p>

Tacos scenester disrupt affogato church-key drinking vinegar fanny pack vaporware. Food truck cardigan subway tile activated charcoal franzen. Literally franzen quinoa, letterpress flannel hashtag irony vexillologist ramps bitters cold-pressed crucifix raclette jianbing. Church-key wolf viral yuccie, vinyl thundercats ramps leggings direct trade cred. Mustache selfies asymmetrical la croix offal lo-fi pickled chia pok pok man bun mlkshk dreamcatcher. Air plant flexitarian photo booth, dreamcatcher vegan man bun cornhole glossier vice hot chicken bespoke. Prism raclette tacos XOXO semiotics whatever next level schlitz meditation art party wolf copper mug swag.
</p>
<p>

Activated charcoal hell of offal fanny pack 8-bit cred banjo. Cornhole bespoke bitters, umami franzen keytar bushwick ugh meditation. Migas schlitz pok pok, air plant kogi paleo hoodie tilde literally. IPhone farm-to-table blue bottle you probably haven't heard of them kickstarter shoreditch flannel vape. Affogato offal ugh palo santo listicle squid cliche pitchfork yr twee. Cronut occupy keffiyeh, shoreditch narwhal vinyl synth tote bag disrupt chartreuse. Snackwave edison bulb direct trade pug flannel.
</p>

<p>
Keffiyeh chambray succulents, williamsburg cred fixie single-origin coffee whatever vice pour-over butcher. Pour-over la croix neutra, freegan tumeric pitchfork paleo fingerstache ramps williamsburg. +1 air plant deep v palo santo, selfies pop-up kitsch shabby chic pok pok sustainable bicycle rights migas. Lumbersexual drinking vinegar flannel shaman tote bag narwhal.

</p>
<p>
Fashion axe before they sold out bespoke photo booth craft beer pok pok plaid ethical selvage seitan try-hard occupy. Tote bag XOXO austin tumblr helvetica bitters man bun butcher williamsburg typewriter copper mug. Taxidermy ugh brooklyn, roof party typewriter sartorial fixie yuccie paleo enamel pin echo park organic. Glossier master cleanse fashion axe, pug sustainable direct trade tousled.

</p>
<p>
Adaptogen truffaut post-ironic narwhal typewriter, mustache YOLO 3 wolf moon gochujang snackwave. Everyday carry lumbersexual cloud bread, +1 ennui woke sustainable live-edge celiac fixie single-origin coffee fam bushwick. Poutine shabby chic lumbersexual narwhal, pop-up plaid everyday carry stumptown pitchfork knausgaard authentic forage hot chicken venmo semiotics. Photo booth wayfarers 3 wolf moon, tofu thundercats direct trade flannel freegan cred 90's pinterest iceland. Chia hella copper mug butcher, poutine man bun banh mi pabst pinterest blue bottle street art prism neutra salvia mlkshk.

</p>
<p>
Dummy text? More like dummy thicc text, amirite?

</p>


        </div>
        <div className="col-md-4">
        <div className="info-box bg-success">
              <span className="info-box-icon"><i className="far fa-bookmark"></i></span>

              <div class="info-box-content">
                <span className="info-box-text text-left">Bookmarks</span>
                <span className="info-box-number text-left">41,410</span>

                <div className="progress">
                  <div className="progress-bar" style={{width: "70%"}}></div>
                </div>
                <span className="progress-description text-left">
                  70% Increase in 30 Days
                </span>
              </div>
              
</div>
        </div>
        <div className="col-md-8">

        <button className="btn btn-primary ">SOME BUTTON</button>
        </div>
      </div>
      </div>
    )

}

export default UserHomePage