import { useEffect, useState } from 'react';
import styles from '../Packages/Packages.module.css';
import data from '../../data/dataPackages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModuleWindow from '../ModulWindow/ModulWindow';


function Packages(){
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (packageId) => {
        setSelectedPackage(packageId);
        setModalOpen(true);
    };
    const closeModal = () => {
        setSelectedPackage(null);
        setModalOpen(false);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(

        <div className={styles.package_cont}>
            <h2>Выберите нужный пакет</h2>
            
            <div className={styles.main_box} data-aos="zoom-in" data-aos-duration="3000">
                {data.map((item) => (
                    <div key={item.id} className={styles.box_package}>
                        <h6>{item.pretitle}</h6>
                        <span>{item.oldprice}</span>
                        <h5>{item.price}</h5>
                        <p>{item.title}</p>
                        <button onClick={() => openModal(item.id)}>Купить</button>
                    </div>
                ))}
            </div>
            {modalOpen && <ModuleWindow packageId = {selectedPackage} closeModal={closeModal}/>}
        </div>
    )
}
export default Packages;