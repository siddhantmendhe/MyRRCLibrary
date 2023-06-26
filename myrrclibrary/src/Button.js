
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded


}){
    return(
    <div className="flex justify-center">
    <button>{children}</button>
    </div>
    );



}

Button.propTypes={
    checkVariationValue:({ 
        primary,
        secondary,
        success,
        warning,
        danger})=>{
        const count=
        Number(!!primary)+
        Number(!!secondary)+
        Number(!!warning)+
        Number(!!success)+
        Number(!!danger);

        if(count>1){
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    }
}
export default Button;