import { connect } from 'react-redux';
import { } from '../actions/reims/reim.actions';
import { IState } from '../reducers';
import { SigninComponent } from './signin.component';




const mapStateToProps = (state: IState) => (state.reim);
    
export const mapDispatchToProps = {
    
};

export const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninComponent);
