import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {

    const free = {
        name: "FREE",
        title: "$0/month",
        terms: {
            isactive: {
                term1: "Single User",
                term2: "50 GB Storage",
                term3: "Unlimited Public Projects"
            },
            nonactive: {
                term4: "Unlimited Private Objects",
                term5: "Dedicated Phone Support",
                term6: "Free Subdomain",
                term7: "Monthly Status Reports"

            }

        }
    }
    const plus = {
        name: "PLUS",
        title: "$9/month",
        terms: {
            isactive: {
                term1: "5 Users",
                term2: "50 GB Storage",
                term3: "Unlimited Public Projects",
                term4: "Community Access",
                term5: "Unlimited Private Objects",
                term6: "Dedicated Phone Support",
                term7: "Free Subdomain"

            },
            nonactive: {
                term8: "Monthly Status Reports"

            }

        }
    }
    const pro = {
        name: "PRO",
        title: "$49/month",
        terms: {
            isactive: {
                term1: "Unlimited Users",
                term2: "50 GB Storage",
                term3: "Unlimited Public Projects",
                term4: "Community Access",
                term5: "Unlimited Private Objects",
                term6: "Dedicated Phone Support",
                term7: "Free Subdomain",
                term8: "Monthly Status Reports"

            }

        }
    }
    const package_List = [free, plus, pro]

    return (
        <section className="Main">
            {package_List.map((p_list, index) => (
                
                    <div key={index} className={p_list.name}>
                        <p className="packagename">{p_list.name}</p>
                        <h2>{p_list.title}</h2>
                        <ul className='custom-list'>
                        {Object.values(p_list.terms.isactive).map((t_list, ind) => (
                                <li key={ind}><FontAwesomeIcon icon={faCheck} className="check-icon" />
                                <span className='List_display'>{t_list}</span></li>
                            
                        ))
                        }
                        {
                            
                            p_list.terms.nonactive && Object.values(p_list.terms.nonactive).map((t_list2, ind2) => (
                                <li key={ind2}><FontAwesomeIcon icon={faTimes} className="cross-icon" />
                                <span className='List_display2'>{t_list2}</span></li>
                            
                        ))
                       
                        
                    }
                        </ul>

                    </div>

                )
            )
            }
            
        </section>
    )


}
export default Cards