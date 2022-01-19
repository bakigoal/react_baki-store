import {Form} from "react-bootstrap";

const CustomSelect = ({options, defaultValue}) => (
    <Form.Select defaultValue={defaultValue} className="s-text7">
        {options.map(option => (
            <option value={option.value} key={option.value}>{option.text}</option>
        ))}
    </Form.Select>
)

export default CustomSelect