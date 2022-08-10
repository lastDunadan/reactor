import style from './Splashscreen.module.scss'

const Splashscreen = () => (
  <section className={style.splasScreen}>
    <div className={style.infoBox}>
      <h2>Reactor - A Components Repository</h2>
      <p className={style.infoBox__name}>by: <a href="https://www.linkedin.com/in/pawel-modzelewski/" target="_blank" rel="noreferrer">Pawel Modzelewski</a></p>
      <p>How to work with this repo:</p>
      <ul>
        <li>&#9755; Remove component <b>&#60;Splashscreen /&#62;</b> from component <b>&#60;App&#62;</b> to remove this splashscreen.</li>
        <li>&#9755; Import any components from <b>components</b> folder to construct your websites layout.</li>
        <li>&#9755; While adding every component fill in <b>props</b> to provide content.</li>
      </ul>
      <p className={style.infoBox__artist}>splashscreen art by: <a href="https://tontonrevolver.artstation.com/" target="_blank" rel="noreferrer">Tonton Revlover</a></p>
    </div>
  </section>
)


export default Splashscreen;