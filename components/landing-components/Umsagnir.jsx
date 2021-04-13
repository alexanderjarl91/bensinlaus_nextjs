import React from 'react'
import styles from '../../styles/Umsagnir.module.css'

//components
import Title from "../Title"

export default function Umsagnir() {
    const people = [
        {avatar: 'https://m.media-amazon.com/images/M/MV5BNmNiNGM5YjItYmI0NC00NjE1LWE4NzAtNmM0MmRiNjY5MDhjXkEyXkFqcGdeQXVyNzMxMjE5OTU@._V1_.jpg',
        name: 'Saga Garðars',
        content: 'Stórkostleg þjónusta! Við fjölskyldan fengum rafbíl hjá Bensínlaus og borgum ekki krónu í eldsneyti framar.'   
        },
        {avatar: 'https://pbs.twimg.com/media/DoxlLtYX0AATIvV.jpg:large',
        name: 'El Marelinho',
        content: 'Ég sérpantaði einn Mitsubishi Helping You 2022 og fékk hann heim að dyrum án tafar. Hoppinní bílinn, dílinn, ja-á.'   
        },
        {avatar: 'https://www.utvarpsaga.is/file/2016/05/david-300x300.png',
        name: 'Davíð Oddsson',
        content: 'Ég fékk nýjan GLC og sparaði mér 2 milljónir króna miðað við markaðinn heima og bíllinn var kominn í mínar hendur eftir aðeins 7 vikum.'   
        },
    ]

    return (
        <div className={styles.container}>
            <Title text="UMSAGNIR" color="white" />
            <div className={styles.umsagnir__items}>
                
            {people.map((person) => (
                <div key={person.name}className={styles.person}>
                    <div className={styles.img__container}>
                        <img className={styles.avatar} src={person.avatar} alt=""/>
                    </div>
                    <p className={styles.name}>{person.name}</p>
                    <p className={styles.content}>{person.content}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
