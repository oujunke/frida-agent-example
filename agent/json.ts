
var propertyDescriptor:any=null;
function init(){
    if(propertyDescriptor==null){

    }
}
function setJsonObjectInfo(jsonObject:any, fromObj:any) {
    
    // 获取Class
    var tClass =  fromObj.getClass();
    // 获取所有的成员变量
    var fields:Array<any> = tClass.getDeclaredFields();
    // 遍历成员变量
    for (let index = 0; index < fields.length; index++) {
        const element = fields[index];
        try{
            // 若：当前变量是不可访问的，则：获取访问权限
            if (!field.isAccessible()) 
            {
                field.setAccessible(true);
            }
             // 获取属性名称
             var key = field.getName();
             // 获取属性描述器：通过属性名称
             var pd = new PropertyDescriptor(key, tClass);
             // 获取该属性的get方法：通过属性描述器
             Method rm = pd.getReadMethod();
             // 获取属性值：对fromObj对象调用Method中获取到的get方法（得到属性值）
             Object valueObj = rm.invoke(fromObj);
             // 获取变量的数据类型的class
             Class valueClass = field.getType();
             // 若：当前变量的数据类型是List类型
             if (List.class.isAssignableFrom(valueClass)) {
                 // 则：在当前JSONObject中加入一个新的JSONArray 
                 JSONArray jsonArray = new JSONArray();
                 // 调用另一个解析List的方法
                 setJsonArrayInfo(jsonArray, (List) valueObj);
                 // 为JSONObject put一个子JSONArray
                 jsonObject.put(key, jsonArray);
             } else {
                 // 否，则：获取变量的最终简易类型名称
                 String valueSimpleName = valueClass.getSimpleName();
                 switch (valueSimpleName) {
                     // 若：类型已经是最终类型（不能进一步解析了）
                     case "Byte":
                     case "Short":
                     case "Integer":
                     case "Long":
                     case "Float":
                     case "Double":
                     case "Boolean":
                     case "Char":
                     case "String":
                         // 则：直接put进JSONObject
                         jsonObject.put(key,valueObj );
                         break;
                     // 若：是其他类型（能够进一步解析，但又不是List）
                     default:
                         // 创建一个子JSONObject
                         JSONObject jsonObject1 = new JSONObject();
                         // 将子jsonobject插入到当前jsonobject中
                         jsonObject.put(key, jsonObject1);
                         // 递归调用
                         setJsonObjectInfo(jsonObject1,valueObj );
                         break;
                 }
             }
        }
    }
    
    for (var field : fields) {
        try {
            
            
           
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

//解析一个List为JSONArray 
private static <T> void setJsonArrayInfo(JSONArray jsonArray, List<T> fromObj) {
    // 获取List长度
    int listSize = fromObj.size();
    // 遍历List
    for (int i = 0; i < listSize; i++) {
        // 取出当前循环对应的元素element
        T object = fromObj.get(i);
        // 获取元素的数据类型
        Class objClass = object.getClass();
        // 若：当前元素依然是一个List
        if (List.class.isAssignableFrom(objClass)) {
            // 则创建一个子JSONArray 
            JSONArray jsonArray1 = new JSONArray();
            // 并将子JSONArray 加入到当前JSONArray 中
            jsonArray.add(jsonArray1);
            // 递归调用解析List的方法
            setJsonArrayInfo(jsonArray1,(List) object);
        }
        else {
            // 否，则：获取变量的最终简易类型名称
            String objSimpleName = objClass.getSimpleName();
            switch (objSimpleName) {
                case "Byte":
                case "Short":
                case "Integer":
                case "Long":
                case "Float":
                case "Double":
                case "Boolean":
                case "Char":
                case "String":
                    jsonArray.add(object);
                    break;
                default:
                    // 不是List又不是最终类型（可以进一步解析的对象类型）
                    // 创建一个子JSONObject
                    JSONObject jsonObject = new JSONObject();
                    // 将子jsonobject插入到当前jsonobject中
                    jsonArray.add(jsonObject);
                    // 调用解析Object的方法
                    setJsonObjectInfo(jsonObject, object);
                    break;
            }
        }
    }
}