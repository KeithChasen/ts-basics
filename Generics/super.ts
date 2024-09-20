// like React.FC
type FunctionalComponent<
    T extends object = object
> = (props: T & { children: any }) => any  

const comp1: FunctionalComponent<{ name: string, age: number }> = ({
    name,
    age,
    children
}) => {

}

const comp2: FunctionalComponent = ({
    children
}) => {

}