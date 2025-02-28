import style from "../Header.module.scss";
import SocialNetwork from "../social-network/SocialNetwork";
import TopStripInfo from "../topstrip-info/TopStripInfo";


export default function TopStrip() {
  return (
      <div className={style.header_widget}>
          <div className="container">
              <div className={`flex-between-center ${style.header_section}`}>
                  <TopStripInfo/>
                  <SocialNetwork/>
              </div>
          </div>
      </div>
  );
}
