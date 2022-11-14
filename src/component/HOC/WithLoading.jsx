export default function withLoading(WrappedComponent, msg="로딩 중..."){
    return function withLoading({isLoading, ...props}){
        if(isLoading){
            return <div>{msg}</div>
        }
        return <WrappedComponent {...props} />
    }
}