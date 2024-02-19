import styles from "./PersonalData.module.css"

function PersonalData(){
    return(
        <div className={styles.background}>
            <div className={styles.b_m}>
           <h1 className={styles.h1}>PRZETWARZANIE DANYCH OSOBOWYCH</h1>
           <p className={styles.p}>1. Zgodnie z art. 13 ust. 1 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) – dalej: RODO, informujemy, że administratorem Pani/Pana danych osobowych jest:
           Polina Petsevych POLINS_PL (NIP 8961613245, REGON 521876298 ) adres ul.Brzozowa 38, Wrocław.
            W sprawach dotyczących danych osobowych można kontaktować się pod adresem email: paulina.piecewicz20@gmail.com</p>


            <p className={styles.p}> 2. Dane osobowe pozyskane w związku z zawarciem z Panią/Panem umowy będą przetwarzane w następujących celach:</p>
                <ul className={styles.ul}>
                    <li>- związanych z realizacją podpisanej z Panią/Panem umowy,</li>
                    <li>- związanych z dochodzeniem ewentualnych roszczeń, odszkodowań, udzielania odpowiedzi na Pani/Pana pisma, wnioski i skargi,</li>
                    <li>- udzielania odpowiedzi w toczących się postępowaniach.</li>
                </ul>

                <p className={styles.p}>3. Podstawą prawną przetwarzania Pani/Pana danych jest:</p>
                <ul className={styles.ul}>
                    <li>- niezbędność do wykonania umowy lub do podjęcia działań na Pani/Pana żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b RODO),</li>
                    <li>- konieczność wypełnienia obowiązku prawnego ciążącego na administratorze (art. 6 ust. 1 lit. c RODO),</li>
                    <li>- niezbędność do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora (art. 6 ust. 1 lit. f RODO).</li>
                </ul>


                    <p className={styles.p}>4. Podanie danych osobowych jest dobrowolne, ale niezbędne do realizacji umowy.</p>


                    <p className={styles.p}>5. Pozyskane od Pani/Pana dane osobowe mogą być przekazywane:</p>
                    <ul className={styles.ul}>
                    <li>- podmiotom przetwarzającym je na nasze zlecenie oraz</li>
                    <li>- organom lub podmiotom publicznym uprawnionym do uzyskania danych na podstawie obowiązujących przepisów prawa, np. sądom, organom ścigania lub instytucjom państwowym, gdy wystąpią z żądaniem, w oparciu o stosowną podstawę prawną.</li>
                </ul>

            <p className={styles.p}>6. Pani/Pana dane nie będą przekazywane do państwa trzeciego/organizacji międzynarodowej.</p>


            <p className={styles.p}>7. Pani/Pana dane osobowe będą przetwarzane przez okres niezbędny do realizacji wskazanych w pkt 2 celów przetwarzania, tj.:</p>
            <ul className={styles.ul}>
                <ol> w zakresie realizacji zawartej przez Panią/Pana umowy, przez okres do czasu zakończenia jej obowiązywania, a po tym czasie przez okres wynikający z przepisów prawa pracy dla zabezpieczenia ewentualnych roszczeń,</ol>
                <ol>w zakresie sporów sądowych przez okres 10 lat od dnia wydania prawomocnego orzeczenia kończącego postępowanie</ol>
            </ul>

            <p className={styles.p}>8. Posiada Pani/Pan prawo dostępu do treści swoich danych osobowych, prawo do ich sprostowania, usunięcia oraz prawo do ograniczenia ich przetwarzania. Ponadto posiada Pani/Pan także prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem zgody, prawo do przenoszenia danych oraz prawo do wniesienia sprzeciwu wobec przetwarzania Pani/Pana danych osobowych.

            Powyższe prawa mogą zostać zrealizowane w formie np. oświadczenia złożonego na piśmie.

            Przysługuje Pani/Panu prawo wniesienia skargi do organu nadzorczego właściwego w sprawach ochrony danych osobowych, gdy uzna Pani/Pan, że przetwarzanie Pani/Pana danych osobowych narusza przepisy RODO.</p>
            </div>
            </div>
    )
}

export default PersonalData;