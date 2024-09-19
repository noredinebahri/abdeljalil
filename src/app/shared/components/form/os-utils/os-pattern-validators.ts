export class OsPatternValidators {
    public static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Morocco rgex to find an international one.
    public static phoneRegex = /^(?:(?:\+|00)212|0)\s*[5|6|7](?:[\s.-]*\d{2}){4,5}$/;
    public static textRegex = /^[a-zA-Z]+$/;
    public static passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    public static basicPhoneRegex =/^\d{3}-\d{3}-\d{4}$/;


}
