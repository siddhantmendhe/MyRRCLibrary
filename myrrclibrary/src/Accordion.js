import { useState } from "react";

function Accordion({items}){
    const [expandedIndex, setExpandedIndex]=useState(0);


    const renderedItems=items.map((item, index)=>{
        const isExpanded=index===expandedIndex;
      
        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" > {item.label} </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t rounded">
        {renderedItems}
        </div>;
}

export default Accordion;