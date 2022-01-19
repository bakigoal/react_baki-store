import {Form} from "react-bootstrap";

const CustomSelect = ({options, defaultValue}) =>(
    <Form.Select aria-label="Select Example" defaultValue={defaultValue}>
        {options.map(option=> (
            <option value={option.value} key={option.value}>{option.text}</option>
        ))}
    </Form.Select>
)

export default CustomSelect