import * as React from 'react';
import {TextField, ITextFieldStyles} from '@fluentui/react/lib/TextField'
import {Callout, DirectionalHint} from '@fluentui/react/lib/Callout';

interface ISearchBoxAndResultsProps {
    // onChangeHandler: (ev: any, newValue: string | undefined)=>void;
    // onKeyDownHandler: (ev: React.KeyboardEvent)=>void;
    // targetElement: any;
}

class SearchBoxAndResults extends React.Component<ISearchBoxAndResultsProps, {}> {
    private _containerRef: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);

        this._containerRef = React.createRef();
    }

    public render() {
        return (
            <div ref={this._containerRef} style={{ position: 'absolute', left: '200px', top: '40px' }}>
                <Callout 
                    target = {this._containerRef}
                    directionalHint={DirectionalHint.leftTopEdge}
                    isBeakVisible={false}
                >
                    <TextField id={'searchTextField'} /* onChange={this.props.onChangeHandler} onKeyDown={this.props.onKeyDownHandler} className="textFieldStyles" */ styles={this.textFieldStyles} />
                </Callout>
                <Callout
                    id={'SearchResultsCalloutId'}
                    target = {this._containerRef}
                    directionalHint={DirectionalHint.leftBottomEdge}
                    isBeakVisible={false}
                    styles={{
                        root: {
                            marginTop: '50px',
                            // marginLeft: '100px'
                        }
                    }}
                >
                    This is the Flyout
                </Callout>
            </div>
        )
    }

    private textFieldStyles: Partial<ITextFieldStyles> = {
        root: {
          width: '500px',
        }, 
        // fieldGroup: {
        //   backgroundColor: 'aqua',
        // }
      }
}

export default SearchBoxAndResults

