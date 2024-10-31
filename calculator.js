const press=(data)=>
    {
        output.value+=data
    }
    
    const clearData=()=>
    {
        output.value=""
    }
    
    const bsp=()=>
    {
        output.value=output.value.slice(0,-1)
    }
    
    const showResult=()=>
    {
        try
        {
            output.value=eval(output.value)
        }
        catch(err)
        {
            console.log(err);
            output.value=""
            output.placeholder="Invalid Expression"
        }
        finally
        {
            console.log("Finally Block");
            
        }
    }