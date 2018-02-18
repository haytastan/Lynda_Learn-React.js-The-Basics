var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        var val = this.refs.newText.getDOMNode().value;
        alert("TODO: Save note value" + val);
        this.setState({editing: false});
    },
    remove: function() {
        alert('removing note');
    },
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note">
            <textarea ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
        )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

    // Board component becomes parent component of Note component
var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: [
                'Call Bill',
                'Email Lisa',
                'Make dentist appt',
                'Send Proposal'
            ]
        };
    },
    render: function() {
        return (
// *notes arrayinin her bir elemanı kadar note component oluşacak ve curly brace ile 
// print edilecek*
            <div className="board">
                {this.state.notes.map(function(note, i){  // curly braces matters
                    return (                              // return sta matters
                        <Note key={i}>{note}</Note>
                    );             // alt: <Note key={i} note={note}></Note>
                })}
            </div>
        );

// *işin özü:*
// <div className="board">
//     {[<Note key={0} >'Call Bill'</Note>, <Note key={1}>'Email Lisa'</Note>]}
// </div>        
    
//  not alt: foreach yerine for loop kullanmak işe yaramadı
    }
});


React.render(<Board count={10}/>, 
    document.getElementById('react-container'));










