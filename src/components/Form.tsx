import React, { FormEvent } from 'react';

interface FormProps {
    isOpen: boolean;
    handler: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
    id?: string | number;
   }

const Form: React.FC<FormProps> = ({isOpen, handler, value, id}) => (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
        <form onSubmit={handler} 
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
        >
            <label htmlFor='title'>Title</label>
            <input key='title' name='title' />
            <label htmlFor='description'>Description</label>
            <textarea key='description' name='description' />
            <input type="file" id="image" name="image" style={{margin: 20}} />
            {value === "Change" && <input type="hidden" name="cardId" value={id} />}
            <button type="submit" 
            style={{
                backgroundColor: 'cadetblue',
                color: 'white',
                fontSize: 18,
                margin: 20
            }}>
                {value}
            </button>
        </form>
    </div>
)

export default Form