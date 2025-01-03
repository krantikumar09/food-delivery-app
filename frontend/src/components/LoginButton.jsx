import { Button } from "@/components/ui/button";

const LoginButton = ({label, link, className}) => {
  return (
    <Button className={className}>
        {label}
    </Button>
  )
}

export default LoginButton