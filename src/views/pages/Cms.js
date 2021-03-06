import React from 'react';
import { SketchPicker } from 'react-color';
import {
	Row,
	Col,
	Card,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	CardBody,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

export default class CmsPage extends React.Component {
	state = {
		viewPrimaryColors: false,
		viewTypography: false,
		viewSpacing: false,
		viewColor1Picker: false,
		viewColor2Picker: false,
		viewColor3Picker: false,
		viewColor4Picker: false,
		viewColor5Picker: false,
		viewTextColor1Picker: false,
		viewTextColor2Picker: false,
		viewTextColor3Picker: false,
		typographyModal: false,
		spacingModal: false,
		previewBorder: '20px',
		previewMargin: '20px',
		previewPadding: '20px',
		data: {}
	};

	resetPickers = () => {
		this.setState({
			viewColor1Picker: false,
			viewColor2Picker: false,
			viewColor3Picker: false,
			viewColor4Picker: false,
			viewColor5Picker: false,
			viewTextColor1Picker: false,
			viewTextColor2Picker: false,
			viewTextColor3Picker: false
		});
	};

	resetPreview = () => {
		this.setState({
			previewBorder: '20px',
			previewMargin: '20px',
			previewPadding: '20px'
		});
	};

	setPreviewBorder = (target) => {
		this.setState({
			previewBorder: this.state.data[target]
		});
	};

	setPreviewMargin = (target) => {
		this.setState({
			previewMargin: this.state.data[target]
		});
	};

	setPreviewPadding = (target) => {
		this.setState({
			previewPadding: this.state.data[target]
		});
	};

	toggleTypographyModal = () => {
		this.setState({
			typographyModal: !this.state.typographyModal
		});
	};

	toggleSpacingModal = () => {
		this.setState({
			spacingModal: !this.state.spacingModal
		});
	};

	showColorPicker = (picker) => {
		this.resetPickers();
		this.setState({
			[picker]: !this.state[picker]
		});
	};

	viewSpacing = () => {
		this.setState({
			viewSpacing: !this.state.viewSpacing
		});
	};

	viewTypography = () => {
		this.setState({
			viewTypography: !this.state.viewTypography
		});
	};

	viewPrimaryColors = () => {
		this.setState({
			viewPrimaryColors: !this.state.viewPrimaryColors
		});
	};

	handleChange = (e) => {
		const id = e.target.getAttribute('id');
		const value = e.target.value;
		const { data } = this.state;

		data[id] = value;

		this.setState({
			data: data
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.data);
	};

	handlePrimaryColor1Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor1 = formattedRGBA;

		this.setState({
			data: data,
			viewColor1Picker: false
		});
	};

	handlePrimaryColor2Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor2 = formattedRGBA;

		this.setState({
			data: data,
			viewColor2Picker: false
		});
	};

	handlePrimaryColor3Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor3 = formattedRGBA;

		this.setState({
			data: data,
			viewColor3Picker: false
		});
	};

	handlePrimaryColor4Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor4 = formattedRGBA;

		this.setState({
			data: data,
			viewColor4Picker: false
		});
	};

	handlePrimaryColor5Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor5 = formattedRGBA;

		this.setState({
			data: data,
			viewColor5Picker: false
		});
	};

	handleTextColor1Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor1 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor1Picker: false
		});
	};

	handleTextColor2Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor2 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor2Picker: false
		});
	};

	handleTextColor3Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor3 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor3Picker: false
		});
	};

	render() {
		const { previewBorder } = this.state;
		const { previewMargin } = this.state;
		const { previewPadding } = this.state;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Col md={8}>
							<Card>
								<CardBody>
									<h3 className="m-b">Primary Colors</h3>
									{this.state.viewPrimaryColors && (
										<FormGroup>
											<Label for="primaryColor1">Color 1</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor1Picker')}
											/>
											{this.state.viewColor1Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor1Change} />
											)}
											<Input
												type="text"
												name="text"
												id="primaryColor1"
												value={this.state.data.primaryColor1 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor2">Color 2</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor2Picker')}
											/>
											{this.state.viewColor2Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor2Change} />
											)}
											<Input
												type="text"
												name="text"
												id="primaryColor2"
												value={this.state.data.primaryColor2 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor3">Color 3</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor3Picker')}
											/>
											{this.state.viewColor3Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor3Change} />
											)}
											<Input
												type="text"
												name="text"
												id="primaryColor3"
												value={this.state.data.primaryColor3 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor4">Color 4</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor4Picker')}
											/>
											{this.state.viewColor4Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor4Change} />
											)}
											<Input
												type="text"
												name="text"
												id="primaryColor4"
												value={this.state.data.primaryColor4 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor5">Color 5</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor5Picker')}
											/>
											{this.state.viewColor5Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor5Change} />
											)}
											<Input
												type="text"
												name="text"
												id="primaryColor5"
												value={this.state.data.primaryColor5 || ''}
												onChange={this.handleChange}
											/>
										</FormGroup>
									)}
									<h6 className="m-b-xxs" onClick={this.viewPrimaryColors}>
										{this.state.viewPrimaryColors ? 'Close' : 'View all'}
									</h6>
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									<h3 className="m-b">Spacing</h3>

									{this.state.viewSpacing && (
										<FormGroup>
											<Label for="marginLarge">Margin Large</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewMargin('marginLarge')}
											/>
											<Input
												type="text"
												name="text"
												id="marginLarge"
												value={this.state.data.marginLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="marginMedium">Margin Medium</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewMargin('marginMedium')}
											/>
											<Input
												type="text"
												name="text"
												id="marginMedium"
												value={this.state.data.marginMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="marginSmall">Margin Small</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewMargin('marginSmall')}
											/>
											<Input
												type="text"
												name="text"
												id="marginSmall"
												value={this.state.data.marginSmall || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<Label for="paddingLarge">Padding Large</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewPadding('paddingLarge')}
											/>
											<Input
												type="text"
												name="text"
												id="paddingLarge"
												value={this.state.data.paddingLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="paddingMedium">Padding Medium</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewPadding('paddingMedium')}
											/>
											<Input
												type="text"
												name="text"
												id="paddingMedium"
												value={this.state.data.paddingMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="paddingSmall">Padding Small</Label>
											<img
												src="/images/eye.png"
												height="15px"
												onClick={() => this.setPreviewPadding('paddingSmall')}
											/>
											<Input
												type="text"
												name="text"
												id="paddingSmall"
												value={this.state.data.paddingSmall || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<h3 className="m-b">
												<Button color="primary" onClick={this.toggleSpacingModal}>
													View Border Rules
												</Button>
												<Modal
													isOpen={this.state.spacingModal}
													toggle={this.toggleSpacingModal}
												>
													<ModalHeader toggle={this.toggleSpacingModal}>
														Border Rules
													</ModalHeader>
													<ModalBody>
														<h5>
															The border property can have from one to four values style,
															width, color and radius. See examples below.
														</h5>
														<ul className="border-modal">
															<li>
																<span>dotted</span>
																<div
																	style={{
																		border: '1px dashed red',
																		borderRadius: '5px',
																		width: '200px',
																		height: '25px'
																	}}
																/>
																<h5>Code:</h5>
																<h6>border-width: 1px</h6>
																<h6>border-style: dashed</h6>
																<h6>border-color: black</h6>
																<h6>border-radius: 5px</h6>
															</li>
															<li>
																<span>solid</span>
																<div
																	style={{
																		border: '3px solid black',
																		width: '200px',
																		height: '25px'
																	}}
																/>
																<h5>Code:</h5>
																<h6>border-width: 3px</h6>
																<h6>border-style: solid</h6>
																<h6>border-color: black</h6>
															</li>
														</ul>
													</ModalBody>
													<ModalFooter>
														<Button color="secondary" onClick={this.toggleSpacingModal}>
															Close
														</Button>
													</ModalFooter>
												</Modal>
											</h3>
											<Label for="border1Width" className="input-label-small">
												<span>Border Style 1</span>
												<img
													src="/images/eye.png"
													height="15px"
													onClick={() => this.setPreviewBorder('border1Width')}
												/>
											</Label>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border1Width"
												placeholder="width"
												value={this.state.data.border1Width || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border1Style"
												placeholder="style"
												value={this.state.data.border1Style || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border1Color"
												placeholder="color"
												value={this.state.data.border1Color || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border1Radius"
												placeholder="radius"
												value={this.state.data.border1Radius || ''}
												onChange={this.handleChange}
											/>

											<Label for="border2Width" className="input-label-small">
												<span>Border Style 2</span>
												<img
													src="/images/eye.png"
													height="15px"
													onClick={() => this.setPreviewBorder('border2Width')}
												/>
											</Label>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border2Width"
												placeholder="width"
												value={this.state.data.border2Width || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border2Style"
												placeholder="style"
												value={this.state.data.border2Style || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border2Color"
												placeholder="color"
												value={this.state.data.border2Color || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border2Radius"
												placeholder="radius"
												value={this.state.data.border2Radius || ''}
												onChange={this.handleChange}
											/>

											<Label for="border3Width" className="input-label-small">
												<span>Border Style 3</span>
												<img
													src="/images/eye.png"
													height="15px"
													onClick={() => this.setPreviewBorder('border3Width')}
												/>
											</Label>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border3Width"
												placeholder="width"
												value={this.state.data.border3Width || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border3Style"
												placeholder="style"
												value={this.state.data.border3Style || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border3Color"
												placeholder="color"
												value={this.state.data.border3Color || ''}
												onChange={this.handleChange}
											/>
											<Input
												className="small-input"
												type="text"
												name="text"
												id="border3Radius"
												placeholder="radius"
												value={this.state.data.border3Radius || ''}
												onChange={this.handleChange}
											/>
										</FormGroup>
									)}
									<h6 className="m-b-xxs" onClick={this.viewSpacing}>
										{this.state.viewSpacing ? 'Close' : 'View all'}
									</h6>
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									<h3 className="m-b">
										<span>Typography</span>

										<Button color="primary" onClick={this.toggleTypographyModal}>
											View Examples
										</Button>
										<Modal
											isOpen={this.state.typographyModal}
											toggle={this.togtoggleTypographyModalgle}
										>
											<ModalHeader toggle={this.toggleTypographyModal}>
												Typography Examples
											</ModalHeader>
											<ModalBody>
												<h1>h1. Heading 1</h1>
												<h2>h2. Heading 2</h2>
												<h3>h3. Heading 3</h3>
												<h4>h4. Heading 4</h4>
												<h5>h5. Heading 5</h5>
												<h6>h6. Heading 6</h6>
												<p>
													Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
													Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
													Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed
													ornare nulla.
												</p>
												<small>
													Quote. Someone famous <cite title="Source Title">Source Title</cite>
												</small>
											</ModalBody>
											<ModalFooter>
												<Button color="secondary" onClick={this.toggleTypographyModal}>
													Close
												</Button>
											</ModalFooter>
										</Modal>
									</h3>

									{this.state.viewTypography && (
										<FormGroup>
											<Label for="heading1FontFamily">Font Family 1</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontFamily"
												value={this.state.data.heading1FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontFamily">Font Family 2</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontFamily"
												value={this.state.data.heading2FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontFamily">Font Family 3</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontFamily"
												value={this.state.data.heading3FontFamily || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<Label for="heading1FontSize">Font Size Large</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontSize"
												value={this.state.data.heading1FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontSize">Font Size Medium</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontSize"
												value={this.state.data.heading2FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontSize">Font Size Small</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontSize"
												value={this.state.data.heading3FontSize || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<Label for="textColor1">Color 1</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor1Picker')}
											/>
											{this.state.viewTextColor1Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor1Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor1"
												value={this.state.data.textColor1 || ''}
												onChange={this.handleChange}
											/>
											<Label for="textColor2">Color 2</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor2Picker')}
											/>
											{this.state.viewTextColor2Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor2Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor2"
												value={this.state.data.textColor2 || ''}
												onChange={this.handleChange}
											/>
											<Label for="textColor3">Color 3</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor3Picker')}
											/>
											{this.state.viewTextColor3Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor3Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor3"
												value={this.state.data.textColor3 || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<Label for="lineHeightLarge">Line Height Large</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightLarge"
												value={this.state.data.lineHeightLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="lineHeightMedium">Line Height Medium</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightMedium"
												value={this.state.data.lineHeightMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="lineHeightSmall">Line Height Small</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightSmall"
												value={this.state.data.lineHeightSmall || ''}
												onChange={this.handleChange}
											/>
											<hr />
											<Label for="letterSpacingLarge">Letter Spacing Large</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingLarge"
												value={this.state.data.letterSpacingLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="letterSpacingMedium">Letter Spacing Medium</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingMedium"
												value={this.state.data.letterSpacingMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="letterSpacingSmall">Letter Spacing Small</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingSmall"
												value={this.state.data.letterSpacingSmall || ''}
												onChange={this.handleChange}
											/>
										</FormGroup>
									)}
									<h6 className="m-b-xxs" onClick={this.viewTypography}>
										{this.state.viewTypography ? 'Close' : 'View all'}
									</h6>
								</CardBody>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<CardBody>
									<div className="preview">
										<div className="preview-block-container">
											<p>margin</p>
											<h4>{previewMargin}</h4>
											<div className="margin-preview-block" style={{ margin: previewMargin }}>
												<p>border</p>
												<h4>{previewBorder}</h4>
												<div
													className="padding-preview-block"
													style={{ margin: previewBorder }}
												>
													<p>padding</p>
													<h4>{previewPadding}</h4>
													<div className="preview-block" style={{ margin: previewPadding }}>
														<span>50 x 100</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<hr />
									<Button block color="primary" onClick={this.resetPreview}>
										Reset Preview
									</Button>
								</CardBody>
							</Card>

							<Card>
								<CardBody>
									<Button block color="primary" type="submit">
										Save
									</Button>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}
