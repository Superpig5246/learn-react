export default function Gallery() {
  return (
    <div>
      <Profile img = 'https://i.imgur.com/szV5sdGs.jpg'
               name = "Maria Skłodowska-Curie"
               profession=  "physicist and chemist"
               awards=  "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
               discovered=  "plutonium (element)"/>
      <Profile img = 'https://i.imgur.com/YfeOqp2s.jpg'
               name = "Katsuko Saruhashi"
               profession=  "geochemist"
               awards=  "Miyake Prize for geochemistry, Tanaka Prize"
               discovered=  "a method for measuring carbon dioxide in seawater"/>
    </div>
  );
}

function Profile({img, name, profession, awards, discovered}) {
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={img}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.split(',')} </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
}
