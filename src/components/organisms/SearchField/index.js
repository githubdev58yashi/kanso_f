import React from 'react';
// redux
import{ connect } from 'react-redux';
// redux-form
import { Field, reduxForm } from 'redux-form';
// actions
// import { convertToQueryString } from '../../../actions';
// material-ui components
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
// css
import useStyles from './useStyles.js';
import { withStyles } from '@material-ui/core';

class SearchField extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);
    // イベントをバインド
    this.onSubmit = this.onSubmit.bind(this);
  };

  // redux-formで使用するテキストフィールドのコンポーネント
  renderTextField(Field) {
    const { className, input } = Field;

    return (
      <InputBase
        // TODO: 複数クラスを適用させるやり方がわからない。後で直す
        className={ className }
        placeholder='キーワードで検索'
        inputProps={{ 'aria-label': 'search'}}
        {...input}
      />
    );
  };

  // 送信時
  async onSubmit(values) {
    // actionsに渡す
    // await this.props.convertToQueryString(values);
    console.log(values);

  };

  // 描画
  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={ handleSubmit(this.onSubmit) }
        className={ this.props.classes.search }
      >
        <Field
          className={this.props.classes.inputInput}
          label="検索"
          name="search"
          type="text"
          component={this.renderTextField}
        />
        <div className={ this.props.classes.searchIcon } >
          <IconButton
            className={ this.props.classes.iconButton }
            type="submit"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    );
  };
};

// redux
// const mapStateToProps = state => ({
//   search: state.search
// });
// const mapDispatchToProps = ({ convertToQueryString });
// export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(
//   reduxForm({form: 'searchForm'})(SearchField))
// );

export default withStyles(useStyles)(reduxForm({form : 'serachForm'})(SearchField));