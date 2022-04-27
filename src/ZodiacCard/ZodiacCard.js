import './ZodiacCard.css';

export default function ZodiacCard({ zodiac }) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, 
as well as load the correct image  from the public directory */
    return (<div className='zodiac'>
      <p>
        {zodiac.name}
      </p>
      <p>
        {zodiac.dates}
      </p>
      <img src={zodiac.name.png} />
    </div>
    );
  }
}
