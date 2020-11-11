import { registerBlockType } from "@wordpress/blocks"
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { Button } from "@wordpress/components"
import { withSelect } from "@wordpress/data"

export function initBlockTablogridClientTwitter() {
	registerBlockType("siejmy/tablogrid-client-twitter", {
		title: "Tablogrid Twitter",
		description: "Wyświetla ostatni tweet z danego konta",
		category: "widgets",
		icon: "smiley",
		supports: {
			html: false,
		},
		attributes: {
			twitterProfile: {
				type: "string",
			},
			bgImageId: {
				type: "string",
			},
			scaleMode: {
				type: "string",
			},
		},
		edit: withSelect((select, { attributes }) => {
			return {
				media: attributes.bgImageId
					? select("core").getMedia(attributes.bgImageId)
					: undefined,
			}
		})(({ className, attributes, setAttributes, media }) => {
			const imgSrc = media ? media.source_url : ""
			console.log({ imgSrc, attributes })

			return (
				<div
					className={className + " client_twitter tablogrid_client"}
					style={{ backgroundImage: "url(" + imgSrc + ")" }}
				>
					<div className="media_upload_container">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ bgImageId: media.id.toString() })
								}
								allowedTypes={["image"]}
								value={attributes.bgImageId}
								render={({ open }) => (
									<Button className="select-media-btn" onClick={open}>
										Zmień zdjęcie
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
					<div>
						<span>Profil Twitter: </span>
						<input
							type="text"
							value={attributes.twitterProfile || ""}
							onChange={(event) =>
								setAttributes({ twitterProfile: event.target.value })
							}
						/>
					</div>
					<div>
						<span>Tryb skalowania: </span>
						<select
							value={attributes.scaleMode || "medium"}
							onChange={(event) =>
								setAttributes({ scaleMode: event.target.value })
							}
						>
							<option value="medium">Średnia szerokość</option>
							<option value="full">Pełna szerokość</option>
						</select>
					</div>
					<div>
						<blockquote>
							<i>
								Wśród ludów będę chwalił Cię, Panie,
								<br />
								zagram Ci wśród narodów,
								<br />
								bo Twoja łaskawość [sięga] aż do niebios,
								<br />
								a wierność Twoja po chmury.
								<br />
								Bądź wywyższony, Boże, ponad niebo,
								<br />
								a Twoja chwała ponad całą ziemię!
								<br />
							</i>
							— Ps 108, 4-6
						</blockquote>
					</div>
				</div>
			)
		}),
	})
}
