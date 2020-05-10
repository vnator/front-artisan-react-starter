import { connect } from 'react-redux';
import { graphql } from '@apollo/react-hoc';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { triggerToast } from '../../components/Toast/redux/thunks';
import { User as UserComponent } from './User';
import { injectIntl } from 'react-intl';
import { USER } from '../../queries/user';
import { ROUTER_PARAMS } from '../../const/routes';

/**
 * INSTANCIANDO DEPENDENCIAS
 */
let User = {};
// funcoes para mapear state do redux para props
const mapStateToProps = () => ({});

// funcoes para actions e thunks para props
const mapDispatchToProps = (dispatch) => ({
  triggerToast: (message) => dispatch(triggerToast(message)),
});

/**
 * DATA FATCING, BUSCANDO INFORMACOES DO SERVER
 */
User = compose(
  graphql(USER.GET_USER, {
    options: (props) => ({
      variables: { id: props.match.params[ROUTER_PARAMS.USER_ID] },
    }),
    skip: (props) => !props.match.params[ROUTER_PARAMS.USER_ID],
  }),
  graphql(USER.UPSERT_USER),
)(UserComponent);

/**
 * CONECTANDO COMPONENTE COM REDUX
 */
User = connect(mapStateToProps, mapDispatchToProps)(User);

// INJETANDO INTERNACIONALIZACAO
User = injectIntl(User);

// INJETANDO CONTEXT DO REACT ROUTER
User = withRouter(User);

export { User };
