import { FC, useState, useEffect } from 'react'
import styles from "./index.module.css";

const Drivers: FC = () => {
    const [searchRes, setSearchRes] = useState<string>('');
    const [dataSearch, setDataSearch] = useState<any>(null);

    const fakeData: any = [
        {
            "company": "Sparrow",
            "name": "Otabek",
            "email": "omonboyevo19@gmail.com",
            "password": "Dispatch2022",
            "plate": "3342612"
        },
        {
            "company": "SM FLEET",
            "name": "Jamshid",
            "email": "Jamshidjavlonov2022@gmail.com",
            "password": "Dispatch2022",
            "plate": "26978PF, 25519PF"
        },
        {
            "company": "SM FLEET",
            "name": "Azam",
            "email": "Azamazimov2022@gmail.com",
            "password": "Dispatch2022",
            "plate": "26978PF, 25519PF"
        },
        {
            "company": "ALI BABA AMERICAN FREIGHT LLC",
            "name": "Albert",
            "email": "albert.dispatching@gmail.com",
            "password": "Dispatch2022",
            "plate": "JD38FZ"
        },
        {
            "company": "ALI BABA AMERICAN FREIGHT LLC",
            "name": "Daisy",
            "email": "ikramovapokiza@gmail.com",
            "password": "Dispatch2022",
            "plate": "JD38FZ"
        },
        {
            "company": "ALI BABA AMERICAN FREIGHT LLC",
            "name": "Khumoyun",
            "email": "khumoyun.abdumajidov@gmail.com",
            "password": "Dispatch2022",
            "plate": "JD38FZ"
        },
        {
            "company": "ATA TRANSIIT INC",
            "name": "dili dilshod",
            "email": "aq1737818@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "TARIFI EXPRESS CORP",
            "name": "Otto Ottoo",
            "email": "ottoc2002.03.11@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "Sparrow",
            "name": "Sophia",
            "email": "sophiadispatch22@gmail.com",
            "password": "Dispatch2022",
            "plate": "3342612"
        },
        {
            "company": "LOYAL CARGO",
            "name": "Gaffar Xan",
            "email": "gaffar.xan@gmail.com",
            "password": "Dispatch2022",
            "plate": "10668PF, PWP6026"
        },
        {
            "company": "SM fleet",
            "name": "Molly garcia",
            "email": "mollygarcia999@gmail.com",
            "password": "Dispatch2022",
            "plate": "26978PF, 25519PF"
        },
        {
            "company": "M-USA",
            "name": "Oyatullo",
            "email": "Nasrullayev004@gmail.com",
            "password": "Dispatch2022",
            "plate": "S1304141, AX917R, R616785"
        },
        {
            "company": "Sparrow",
            "name": "None",
            "email": "sirajkamal304@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "Ali Baba",
            "name": "mari Marri",
            "email": "mariahobs1606@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "Ali Baba",
            "name": "Basri Baba",
            "email": "basri.babakhan@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "NONE",
            "name": "Jasper Carl",
            "email": "jaspercarl944@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "NONE",
            "name": "Hayat Sharifxan",
            "email": "hayat.sharifxan@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "NONE",
            "name": "Himet Alib",
            "email": "hikmat.alib91@gmail.com",
            "password": "Dispatch2022",
            "plate": "NONE"
        },
        {
            "company": "NONE",
            "name": "Edison Brain",
            "email": "dispatchalib@gmail.com",
            "password": "Edison2022",
            "plate": "NONE"
        },
    ]

    useEffect(() => {
       const data = fakeData.filter((value: any) => {
            const initialValue = value.name.toLowerCase().includes(searchRes.toLocaleLowerCase()); 
            return initialValue;  
       })  

       setDataSearch(data); 
    }, [searchRes])

    return (
        <div className={styles.drivers} >
            <div className={styles.container} >
                <div className={styles.search} >
                    <input type="text" placeholder="search by name" onChange={(e) => setSearchRes(e.target.value)} />
                    <div className={styles.btn} >click</div>
                </div>
                <div className={styles.main_table}>
                    {dataSearch && dataSearch.map((value: any) => {
                        return (
                            <div className={styles.main_table_control} >
                                <div className={styles.main_table_control_raw}>{value.company}</div>
                                <div className={styles.main_table_control_raw}>{value.name}</div>
                                <div className={styles.main_table_control_raw}>{value.email}</div>
                                <div className={styles.main_table_control_raw}>{value.password}</div>
                                <div className={styles.main_table_control_raw}>{value.plate}</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Drivers;



// company -> name -> email -> password -> plate number