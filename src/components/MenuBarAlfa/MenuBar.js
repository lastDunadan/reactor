import style from './MenuBar.module.scss'

const MenuBar = ({menuElements, logo}) => (
  <nav className={style.menuBarAlfa} >
    <img
      src={logo}
      alt="logo"
    />
    <ul>
      {
        menuElements.map((singleElement) => {
          return (
            <li>
              <a href={singleElement[1]}>
                {singleElement[0]}
              </a>
            </li>
          )
        })
      }
    </ul>
  </nav>
)

export default MenuBar;