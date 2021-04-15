import React from 'react'
import Head from "next/head";
import styles from "../styles/LeadForm.module.css"
import Button from "../components/Button"
import {useRouter} from "next/router"

export default function LeadForm() {
    const router = useRouter()

    
    return (
    <>
        <div>
        <Head>
            <title>Bensínlaus | Rafbílar | Ísland</title>
            <meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
        
           <div className={styles.container}>
            <h1 className={styles.cardTitle}>Finnum þinn!</h1>
            <form id="formid" className={styles.leadForm} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                <input type="hidden" name="oid" value="00D4W0000050ubK" />
                <input type="hidden" name="retURL" value="https://www.google.com" />
                
                <label for="last_name">Fullt nafn</label>
				<input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                
                <label for="email">Netfang</label>
                <input  id="email" maxlength="80" name="email" size="20" type="text" />
                    
                <label for="phone">Sími</label>
                <input id="phone" maxlength="40" name="phone" size="20" type="text" />
                
                <label for="car_model">Car model</label>
                <input id="00N4W00000BNFKG" maxlength="255" name="00N4W00000BNFKG" size="20" type="text" />

                <select className={styles.hiddenField}  id="00N4W00000BNFKp" name="00N4W00000BNFKp" title="Status Reason">
					<option value="Open - New Lead">Open - New Lead</option>
				</select>

                <input className={styles.hiddenField} id="00N4W00000BNFKY" maxlength="255" name="00N4W00000BNFKY" size="20" type="text" value="Make first contact!" />
                <div className={styles.hiddenField}>
                    <label for="lead_source">Lead Source</label>
                    <select  id="lead_source" name="lead_source">
                        <option value="Web">Web</option>
                    </select>                                
                </div>     

                <a onClick={()=>{
                        document.getElementById('formid').submit()
                        router.push('/bilar')
                    }}>
                    <Button text="SKRÁ MIG" href="/pontun"/>
                </a>


            </form>
           </div>
        </div>    
    </div>
    
    </>
    )
}
