import React from 'react'
import Head from "next/head";
import styles from "../styles/LeadForm.module.css"

export default function LeadForm() {
    return (
        <>
    <div>
        <Head>
            <title>Bensínlaus | Rafbílar | Ísland</title>
            <meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>

        <form className={styles.leadForm}action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <input type="hidden" name="oid" value={process.env.OID} />
            <input type="hidden" name="retURL" value="http://mbl.is" />
                <label for="last_name">Last Name</label>
				<input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                
                <label for="email">Email</label>
                <input  id="email" maxlength="80" name="email" size="20" type="text" />
                    
                <label for="phone">Phone</label>
                <input  id="phone" maxlength="40" name="phone" size="20" type="text" />
                
                <label for="car_model">Car model</label>
                <input id="00N4W00000BNFKG" maxlength="255" name="00N4W00000BNFKG" size="20" type="text" />
                        
                <label for="description">Description</label>
                <textarea name="description"></textarea>


                <select  id="00N4W00000BNFKp" name="00N4W00000BNFKp" title="Status Reason">
							<option value="Open - New Lead">Open - New Lead</option>
						</select>

                <input  id="00N4W00000BNFKY" maxlength="255" name="00N4W00000BNFKY" size="20" type="text" value="Make first contact!" />

                <div className={styles.leadSource}>
                    <label for="lead_source">Lead Source</label>
                    <select  id="lead_source" name="lead_source">
                        <option value="Web">Web</option>
                    </select>                                
                </div>         
                <input type="submit" name="submit" />
            </form>
        </div>    
    </div>
    
    </>
    )
}
