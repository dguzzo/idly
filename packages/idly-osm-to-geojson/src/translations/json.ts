export default {
    "en": {
        "modes": {
            "add_area": {
                "title": "Area",
                "description": "Add parks, buildings, lakes or other areas to the map.",
                "tail": "Click on the map to start drawing an area, like a park, lake, or building."
            },
            "add_line": {
                "title": "Line",
                "description": "Add highways, streets, pedestrian paths, canals or other lines to the map.",
                "tail": "Click on the map to start drawing a road, path, or route."
            },
            "add_point": {
                "title": "Point",
                "description": "Add restaurants, monuments, postal boxes or other points to the map.",
                "tail": "Click on the map to add a point."
            },
            "browse": {
                "title": "Browse",
                "description": "Pan and zoom the map."
            },
            "draw_area": {
                "tail": "Click to add nodes to your area. Click the first node to finish the area."
            },
            "draw_line": {
                "tail": "Click to add more nodes to the line. Click on other lines to connect to them, and double-click to end the line."
            },
            "drag_node": {
                "connected_to_hidden": "This can't be edited because it is connected to a hidden feature."
            }
        },
        "operations": {
            "add": {
                "annotation": {
                    "point": "Added a point.",
                    "vertex": "Added a node to a way.",
                    "relation": "Added a relation."
                }
            },
            "start": {
                "annotation": {
                    "line": "Started a line.",
                    "area": "Started an area."
                }
            },
            "continue": {
                "key": "A",
                "title": "Continue",
                "description": "Continue this line.",
                "not_eligible": "No line can be continued here.",
                "multiple": "Several lines can be continued here. To choose a line, press the Shift key and click on it to select it.",
                "annotation": {
                    "line": "Continued a line.",
                    "area": "Continued an area."
                }
            },
            "cancel_draw": {
                "annotation": "Canceled drawing."
            },
            "change_role": {
                "annotation": "Changed the role of a relation member."
            },
            "change_tags": {
                "annotation": "Changed tags."
            },
            "circularize": {
                "title": "Circularize",
                "description": {
                    "line": "Make this line circular.",
                    "area": "Make this area circular."
                },
                "key": "O",
                "annotation": {
                    "line": "Made a line circular.",
                    "area": "Made an area circular."
                },
                "not_closed": "This can't be made circular because it's not a loop.",
                "too_large": "This can't be made circular because not enough of it is currently visible.",
                "connected_to_hidden": "This can't be made circular because it is connected to a hidden feature."
            },
            "orthogonalize": {
                "title": "Square",
                "description": {
                    "line": "Square the corners of this line.",
                    "area": "Square the corners of this area."
                },
                "key": "S",
                "annotation": {
                    "line": "Squared the corners of a line.",
                    "area": "Squared the corners of an area."
                },
                "not_squarish": "This can't be made square because it is not squarish.",
                "too_large": "This can't be made square because not enough of it is currently visible.",
                "connected_to_hidden": "This can't be made square because it is connected to a hidden feature."
            },
            "straighten": {
                "title": "Straighten",
                "description": "Straighten this line.",
                "key": "S",
                "annotation": "Straightened a line.",
                "too_bendy": "This can't be straightened because it bends too much.",
                "connected_to_hidden": "This line can't be straightened because it is connected to a hidden feature."
            },
            "delete": {
                "title": "Delete",
                "description": {
                    "single": "Delete this feature permanently.",
                    "multiple": "Delete these features permanently."
                },
                "annotation": {
                    "point": "Deleted a point.",
                    "vertex": "Deleted a node from a way.",
                    "line": "Deleted a line.",
                    "area": "Deleted an area.",
                    "relation": "Deleted a relation.",
                    "multiple": "Deleted {n} features."
                },
                "too_large": {
                    "single": "This feature can't be deleted because not enough of it is currently visible.",
                    "multiple": "These features can't be deleted because not enough of them are currently visible."
                },
                "incomplete_relation": {
                    "single": "This feature can't be deleted because it hasn't been fully downloaded.",
                    "multiple": "These features can't be deleted because they haven't been fully downloaded."
                },
                "part_of_relation": {
                    "single": "This feature can't be deleted because it is part of a larger relation. You must remove it from the relation first.",
                    "multiple": "These features can't be deleted because they are part of larger relations. You must remove them from the relations first."
                },
                "connected_to_hidden": {
                    "single": "This feature can't be deleted because it is connected to a hidden feature.",
                    "multiple": "These features can't be deleted because some are connected to hidden features."
                }
            },
            "add_member": {
                "annotation": "Added a member to a relation."
            },
            "delete_member": {
                "annotation": "Removed a member from a relation."
            },
            "connect": {
                "annotation": {
                    "point": "Connected a way to a point.",
                    "vertex": "Connected a way to another.",
                    "line": "Connected a way to a line.",
                    "area": "Connected a way to an area."
                }
            },
            "disconnect": {
                "title": "Disconnect",
                "description": "Disconnect these lines/areas from each other.",
                "key": "D",
                "annotation": "Disconnected lines/areas.",
                "not_connected": "There aren't enough lines/areas here to disconnect.",
                "connected_to_hidden": "This can't be disconnected because it is connected to a hidden feature.",
                "relation": "This can't be disconnected because it connects members of a relation."
            },
            "merge": {
                "title": "Merge",
                "description": "Merge these features.",
                "key": "C",
                "annotation": "Merged {n} features.",
                "not_eligible": "These features can't be merged.",
                "not_adjacent": "These features can't be merged because their endpoints aren't connected.",
                "restriction": "These features can't be merged because at least one is a member of a \"{relation}\" relation.",
                "incomplete_relation": "These features can't be merged because at least one hasn't been fully downloaded.",
                "conflicting_tags": "These features can't be merged because some of their tags have conflicting values."
            },
            "move": {
                "title": "Move",
                "description": {
                    "single": "Move this feature to a different location.",
                    "multiple": "Move these features to a different location."
                },
                "key": "M",
                "annotation": {
                    "point": "Moved a point.",
                    "vertex": "Moved a node in a way.",
                    "line": "Moved a line.",
                    "area": "Moved an area.",
                    "multiple": "Moved multiple features."
                },
                "incomplete_relation": {
                    "single": "This feature can't be moved because it hasn't been fully downloaded.",
                    "multiple": "These features can't be moved because they haven't been fully downloaded."
                },
                "too_large": {
                    "single": "This feature can't be moved because not enough of it is currently visible.",
                    "multiple": "These features can't be moved because not enough of them are currently visible."
                },
                "connected_to_hidden": {
                    "single": "This feature can't be moved because it is connected to a hidden feature.",
                    "multiple": "These features can't be moved because some are connected to hidden features."
                }
            },
            "reflect": {
                "title": {
                    "long": "Reflect Long",
                    "short": "Reflect Short"
                },
                "description": {
                    "long": {
                        "single": "Reflect this feature across its long axis.",
                        "multiple": "Reflect these features across their long axis."
                    },
                    "short": {
                        "single": "Reflect this feature across its short axis.",
                        "multiple": "Reflect these features across their short axis."
                    }
                },
                "key": {
                    "long": "T",
                    "short": "Y"
                },
                "annotation": {
                    "long": {
                        "single": "Reflected a feature across its long axis.",
                        "multiple": "Reflected multiple features across their long axis."
                    },
                    "short": {
                        "single": "Reflected a feature across its short axis.",
                        "multiple": "Reflected multiple features across their short axis."
                    }
                },
                "incomplete_relation": {
                    "single": "This feature can't be reflected because it hasn't been fully downloaded.",
                    "multiple": "These features can't be reflected because they haven't been fully downloaded."
                },
                "too_large": {
                    "single": "This feature can't be reflected because not enough of it is currently visible.",
                    "multiple": "These features can't be reflected because not enough of them are currently visible."
                },
                "connected_to_hidden": {
                    "single": "This feature can't be reflected because it is connected to a hidden feature.",
                    "multiple": "These features can't be reflected because some are connected to hidden features."
                }
            },
            "rotate": {
                "title": "Rotate",
                "description": {
                    "single": "Rotate this feature around its center point.",
                    "multiple": "Rotate these features around their center point."
                },
                "key": "R",
                "annotation": {
                    "line": "Rotated a line.",
                    "area": "Rotated an area.",
                    "multiple": "Rotated multiple features."
                },
                "incomplete_relation": {
                    "single": "This feature can't be rotated because it hasn't been fully downloaded.",
                    "multiple": "These features can't be rotated because they haven't been fully downloaded."
                },
                "too_large": {
                    "single": "This feature can't be rotated because not enough of it is currently visible.",
                    "multiple": "These features can't be rotated because not enough of them are currently visible."
                },
                "connected_to_hidden": {
                    "single": "This feature can't be rotated because it is connected to a hidden feature.",
                    "multiple": "These features can't be rotated because some are connected to hidden features."
                }
            },
            "reverse": {
                "title": "Reverse",
                "description": "Make this line go in the opposite direction.",
                "key": "V",
                "annotation": "Reversed a line."
            },
            "split": {
                "title": "Split",
                "description": {
                    "line": "Split this line into two at this node.",
                    "area": "Split the boundary of this area into two.",
                    "multiple": "Split the lines/area boundaries at this node into two."
                },
                "key": "X",
                "annotation": {
                    "line": "Split a line.",
                    "area": "Split an area boundary.",
                    "multiple": "Split {n} lines/area boundaries."
                },
                "not_eligible": "Lines can't be split at their beginning or end.",
                "multiple_ways": "There are too many lines here to split.",
                "connected_to_hidden": "This can't be split because it is connected to a hidden feature."
            },
            "restriction": {
                "help": {
                    "select": "Click to select a road segment.",
                    "toggle": "Click to toggle turn restrictions.",
                    "toggle_on": "Click to add a \"{restriction}\" restriction.",
                    "toggle_off": "Click to remove the \"{restriction}\" restriction."
                },
                "annotation": {
                    "create": "Added a turn restriction",
                    "delete": "Deleted a turn restriction"
                }
            }
        },
        "undo": {
            "tooltip": "Undo: {action}",
            "nothing": "Nothing to undo."
        },
        "redo": {
            "tooltip": "Redo: {action}",
            "nothing": "Nothing to redo."
        },
        "tooltip_keyhint": "Shortcut:",
        "browser_notice": "This editor is supported in Firefox, Chrome, Safari, Opera, and Internet Explorer 11 and above. Please upgrade your browser or use Potlatch 2 to edit the map.",
        "translate": {
            "translate": "Translate",
            "localized_translation_label": "Multilingual name",
            "localized_translation_language": "Choose language",
            "localized_translation_name": "Name"
        },
        "zoom_in_edit": "Zoom in to edit",
        "login": "login",
        "logout": "logout",
        "loading_auth": "Connecting to OpenStreetMap...",
        "report_a_bug": "Report a bug",
        "help_translate": "Help translate",
        "feature_info": {
            "hidden_warning": "{count} hidden features",
            "hidden_details": "These features are currently hidden: {details}"
        },
        "status": {
            "error": "Unable to connect to API.",
            "offline": "The API is offline. Please try editing later.",
            "readonly": "The API is read-only. You will need to wait to save your changes.",
            "rateLimit": "The API is limiting anonymous connections.  You can fix this by logging in."
        },
        "commit": {
            "title": "Upload to OpenStreetMap",
            "upload_explanation": "The changes you upload will be visible on all maps that use OpenStreetMap data.",
            "upload_explanation_with_user": "The changes you upload as {user} will be visible on all maps that use OpenStreetMap data.",
            "request_review": "I would like someone to review my edits.",
            "save": "Upload",
            "cancel": "Cancel",
            "changes": "{count} Changes",
            "download_changes": "Download osmChange file",
            "warnings": "Warnings",
            "modified": "Modified",
            "deleted": "Deleted",
            "created": "Created",
            "about_changeset_comments": "About changeset comments",
            "about_changeset_comments_link": "//wiki.openstreetmap.org/wiki/Good_changeset_comments",
            "google_warning": "You mentioned Google in this comment: remember that copying from Google Maps is strictly forbidden.",
            "google_warning_link": "https://www.openstreetmap.org/copyright"
        },
        "contributors": {
            "list": "Edits by {users}",
            "truncated_list": "Edits by {users} and {count} others"
        },
        "info_panels": {
            "key": "I",
            "background": {
                "key": "B",
                "title": "Background",
                "zoom": "Zoom",
                "vintage": "Vintage",
                "source": "Source",
                "description": "Description",
                "resolution": "Resolution",
                "accuracy": "Accuracy",
                "unknown": "Unknown",
                "show_tiles": "Show Tiles",
                "hide_tiles": "Hide Tiles",
                "show_vintage": "Show Vintage",
                "hide_vintage": "Hide Vintage"
            },
            "history": {
                "key": "H",
                "title": "History",
                "selected": "{n} selected",
                "version": "Version",
                "last_edit": "Last Edit",
                "edited_by": "Edited By",
                "changeset": "Changeset",
                "unknown": "Unknown",
                "link_text": "History on openstreetmap.org"
            },
            "location": {
                "key": "L",
                "title": "Location",
                "unknown_location": "Unknown Location"
            },
            "measurement": {
                "key": "M",
                "title": "Measurement",
                "selected": "{n} selected",
                "geometry": "Geometry",
                "closed": "closed",
                "center": "Center",
                "perimeter": "Perimeter",
                "length": "Length",
                "area": "Area",
                "centroid": "Centroid",
                "location": "Location",
                "metric": "Metric",
                "imperial": "Imperial"
            }
        },
        "geometry": {
            "point": "point",
            "vertex": "vertex",
            "line": "line",
            "area": "area",
            "relation": "relation"
        },
        "geocoder": {
            "search": "Search worldwide...",
            "no_results_visible": "No results in visible map area",
            "no_results_worldwide": "No results found"
        },
        "geolocate": {
            "title": "Show My Location",
            "locating": "Locating, please wait..."
        },
        "inspector": {
            "no_documentation_combination": "There is no documentation available for this tag combination",
            "no_documentation_key": "There is no documentation available for this key",
            "documentation_redirect": "This documentation has been redirected to a new page",
            "show_more": "Show More",
            "view_on_osm": "View on openstreetmap.org",
            "all_fields": "All fields",
            "all_tags": "All tags",
            "all_members": "All members",
            "all_relations": "All relations",
            "new_relation": "New relation...",
            "role": "Role",
            "choose": "Select feature type",
            "results": "{n} results for {search}",
            "reference": "View on OpenStreetMap Wiki",
            "back_tooltip": "Change feature",
            "remove": "Remove",
            "search": "Search",
            "multiselect": "Selected features",
            "unknown": "Unknown",
            "incomplete": "<not downloaded>",
            "feature_list": "Search features",
            "edit": "Edit feature",
            "check": {
                "yes": "Yes",
                "no": "No",
                "reverser": "Change Direction"
            },
            "radio": {
                "structure": {
                    "type": "Type",
                    "default": "Default",
                    "layer": "Layer"
                }
            },
            "add": "Add",
            "none": "None",
            "node": "Node",
            "way": "Way",
            "relation": "Relation",
            "location": "Location",
            "add_fields": "Add field:"
        },
        "background": {
            "title": "Background",
            "description": "Background settings",
            "key": "B",
            "percent_brightness": "{opacity}% brightness",
            "none": "None",
            "best_imagery": "Best known imagery source for this location",
            "switch": "Switch back to this background",
            "custom": "Custom",
            "custom_button": "Edit custom background",
            "custom_prompt": "Enter a tile URL template. Valid tokens are:\n   - {zoom}/{z}, {x}, {y} for Z/X/Y tile scheme\n   - {ty} for flipped TMS-style Y coordinates\n   - {u} for quadtile scheme\n   - {switch:a,b,c} for DNS server multiplexing\n\nExample:\n{example}",
            "fix_misalignment": "Adjust imagery offset",
            "imagery_source_faq": "Where does this imagery come from?",
            "reset": "reset",
            "offset": "Drag anywhere in the gray area below to adjust the imagery offset, or enter the offset values in meters.",
            "minimap": {
                "description": "Minimap",
                "tooltip": "Show a zoomed out map to help locate the area currently displayed.",
                "key": "/"
            }
        },
        "map_data": {
            "title": "Map Data",
            "description": "Map Data",
            "key": "F",
            "data_layers": "Data Layers",
            "layers": {
                "osm": {
                    "tooltip": "Map data from OpenStreetMap",
                    "title": "OpenStreetMap data"
                }
            },
            "fill_area": "Fill Areas",
            "map_features": "Map Features",
            "autohidden": "These features have been automatically hidden because too many would be shown on the screen.  You can zoom in to edit them.",
            "osmhidden": "These features have been automatically hidden because the OpenStreetMap layer is hidden."
        },
        "feature": {
            "points": {
                "description": "Points",
                "tooltip": "Points of Interest"
            },
            "traffic_roads": {
                "description": "Traffic Roads",
                "tooltip": "Highways, Streets, etc."
            },
            "service_roads": {
                "description": "Service Roads",
                "tooltip": "Service Roads, Parking Aisles, Tracks, etc."
            },
            "paths": {
                "description": "Paths",
                "tooltip": "Sidewalks, Foot Paths, Cycle Paths, etc."
            },
            "buildings": {
                "description": "Buildings",
                "tooltip": "Buildings, Shelters, Garages, etc."
            },
            "landuse": {
                "description": "Landuse Features",
                "tooltip": "Forests, Farmland, Parks, Residential, Commercial, etc."
            },
            "boundaries": {
                "description": "Boundaries",
                "tooltip": "Administrative Boundaries"
            },
            "water": {
                "description": "Water Features",
                "tooltip": "Rivers, Lakes, Ponds, Basins, etc."
            },
            "rail": {
                "description": "Rail Features",
                "tooltip": "Railways"
            },
            "power": {
                "description": "Power Features",
                "tooltip": "Power Lines, Power Plants, Substations, etc."
            },
            "past_future": {
                "description": "Past/Future",
                "tooltip": "Proposed, Construction, Abandoned, Demolished, etc."
            },
            "others": {
                "description": "Others",
                "tooltip": "Everything Else"
            }
        },
        "area_fill": {
            "wireframe": {
                "description": "No Fill (Wireframe)",
                "tooltip": "Enabling wireframe mode makes it easy to see the background imagery.",
                "key": "W"
            },
            "partial": {
                "description": "Partial Fill",
                "tooltip": "Areas are drawn with fill only around their inner edges. (Recommended for beginner mappers)"
            },
            "full": {
                "description": "Full Fill",
                "tooltip": "Areas are drawn fully filled."
            }
        },
        "restore": {
            "heading": "You have unsaved changes",
            "description": "Do you wish to restore unsaved changes from a previous editing session?",
            "restore": "Restore my changes",
            "reset": "Discard my changes"
        },
        "save": {
            "title": "Save",
            "help": "Review your changes and upload them to OpenStreetMap, making them visible to other users.",
            "no_changes": "No changes to save.",
            "error": "Errors occurred while trying to save",
            "status_code": "Server returned status code {code}",
            "unknown_error_details": "Please ensure you are connected to the internet.",
            "uploading": "Uploading changes to OpenStreetMap...",
            "unsaved_changes": "You have unsaved changes",
            "conflict": {
                "header": "Resolve conflicting edits",
                "count": "Conflict {num} of {total}",
                "previous": "< Previous",
                "next": "Next >",
                "keep_local": "Keep mine",
                "keep_remote": "Use theirs",
                "restore": "Restore",
                "delete": "Leave Deleted",
                "download_changes": "Or download osmChange file",
                "done": "All conflicts resolved!",
                "help": "Another user changed some of the same map features you changed.\nClick on each feature below for more details about the conflict, and choose whether to keep\nyour changes or the other user's changes.\n"
            }
        },
        "merge_remote_changes": {
            "conflict": {
                "deleted": "This feature has been deleted by {user}.",
                "location": "This feature was moved by both you and {user}.",
                "nodelist": "Nodes were changed by both you and {user}.",
                "memberlist": "Relation members were changed by both you and {user}.",
                "tags": "You changed the <b>{tag}</b> tag to \"{local}\" and {user} changed it to \"{remote}\"."
            }
        },
        "success": {
            "edited_osm": "Edited OSM!",
            "just_edited": "You just edited OpenStreetMap!",
            "view_on_osm": "View on OSM",
            "facebook": "Share on Facebook",
            "twitter": "Share on Twitter",
            "google": "Share on Google+",
            "help_html": "Your changes should appear in the \"Standard\" layer in a few minutes. Other layers, and certain features, may take longer.",
            "help_link_text": "Details",
            "help_link_url": "https://wiki.openstreetmap.org/wiki/FAQ#I_have_just_made_some_changes_to_the_map._How_do_I_get_to_see_my_changes.3F"
        },
        "confirm": {
            "okay": "OK",
            "cancel": "Cancel"
        },
        "splash": {
            "welcome": "Welcome to the iD OpenStreetMap editor",
            "text": "iD is a friendly but powerful tool for contributing to the world's best free world map. This is version {version}. For more information see {website} and report bugs at {github}.",
            "walkthrough": "Start the Walkthrough",
            "start": "Edit now"
        },
        "source_switch": {
            "live": "live",
            "lose_changes": "You have unsaved changes. Switching the map server will discard them. Are you sure you want to switch servers?",
            "dev": "dev"
        },
        "version": {
            "whats_new": "What's new in iD {version}"
        },
        "tag_reference": {
            "description": "Description",
            "on_wiki": "{tag} on wiki.osm.org",
            "used_with": "used with {type}"
        },
        "validations": {
            "disconnected_highway": "Disconnected highway",
            "disconnected_highway_tooltip": "Roads should be connected to other roads or building entrances.",
            "old_multipolygon": "Multipolygon tags on outer way",
            "old_multipolygon_tooltip": "This style of multipolygon is deprecated. Please assign the tags to the parent multipolygon instead of the outer way.",
            "untagged_point": "Untagged point",
            "untagged_point_tooltip": "Select a feature type that describes what this point is.",
            "untagged_line": "Untagged line",
            "untagged_line_tooltip": "Select a feature type that describes what this line is.",
            "untagged_area": "Untagged area",
            "untagged_area_tooltip": "Select a feature type that describes what this area is.",
            "untagged_relation": "Untagged relation",
            "untagged_relation_tooltip": "Select a feature type that describes what this relation is.",
            "many_deletions": "You're deleting {n} features. Are you sure you want to do this? This will delete them from the map that everyone else sees on openstreetmap.org.",
            "tag_suggests_area": "The tag {tag} suggests line should be area, but it is not an area",
            "deprecated_tags": "Deprecated tags: {tags}"
        },
        "zoom": {
            "in": "Zoom in",
            "out": "Zoom out"
        },
        "cannot_zoom": "Cannot zoom out further in current mode.",
        "full_screen": "Toggle Full Screen",
        "gpx": {
            "local_layer": "Local file",
            "drag_drop": "Drag and drop a .gpx, .geojson or .kml file on the page, or click the button to the right to browse",
            "zoom": "Zoom to layer",
            "browse": "Browse for a file"
        },
        "mapillary_images": {
            "tooltip": "Street-level photos from Mapillary",
            "title": "Photo Overlay (Mapillary)"
        },
        "mapillary_signs": {
            "tooltip": "Traffic signs from Mapillary (must enable Photo Overlay)",
            "title": "Traffic Sign Overlay (Mapillary)"
        },
        "mapillary": {
            "view_on_mapillary": "View this image on Mapillary"
        },
        "openstreetcam_images": {
            "tooltip": "Street-level photos from OpenStreetCam",
            "title": "Photo Overlay (OpenStreetCam)"
        },
        "openstreetcam": {
            "view_on_openstreetcam": "View this image on OpenStreetCam"
        },
        "help": {
            "title": "Help",
            "key": "H",
            "help": {
                "title": "Help",
                "welcome": "Welcome to the iD editor for [OpenStreetMap](https://www.openstreetmap.org/). With this editor you can update OpenStreetMap right from your web browser.",
                "open_data_h": "Open Data",
                "open_data": "Edits that you make on this map will be visible to everyone who uses OpenStreetMap. Your edits can be based on personal knowledge, on-the-ground surveying, or imagery collected from aerial or street level photos. Copying from commercial sources, like Google Maps, [is strictly forbidden](https://www.openstreetmap.org/copyright).",
                "before_start_h": "Before you start",
                "before_start": "You should be familiar with OpenStreetMap and this editor before you start editing. iD contains a walkthrough to teach you the basics of editing OpenStreetMap. Click \"Start the Walkthrough\" on this screen to take the tutorial - it takes only about 15 minutes.",
                "open_source_h": "Open Source",
                "open_source": "The iD editor is a collaborative open source project, and you are using version {version} now. The source code is available [on GitHub](https://github.com/openstreetmap/iD).",
                "open_source_help": "You can help iD by [translating](https://github.com/openstreetmap/iD/blob/master/CONTRIBUTING.md#translating) or [reporting bugs](https://github.com/openstreetmap/iD/issues)."
            },
            "overview": {
                "title": "Overview",
                "navigation_h": "Navigation",
                "navigation_drag": "You can drag the map by pressing and holding down the {leftclick} left mouse button and moving the mouse around. You can also use the `↓`, `↑`, `←`, `→` arrow keys on your keyboard.",
                "navigation_zoom": "You can zoom in or out by scrolling with the mouse wheel or trackpad, or by clicking the {plus} / {minus} buttons along the side of the map. You can also use the `+`, `-` keys on your keyboard.",
                "features_h": "Map Features",
                "features": "We use the word *features* to describe things that appear on the map, such as roads, buildings, or points of interest. Anything in the real world can be mapped as a feature on OpenStreetMap. Map features are represented on the map using *points*, *lines*, or *areas*.",
                "nodes_ways": "In OpenStreetmap, points are sometimes called *nodes*, and lines and areas are sometimes called *ways*."
            },
            "editing": {
                "title": "Editing & Saving",
                "select_h": "Select",
                "select_left_click": "{leftclick} Left-click on a feature to select it. This will highlight it with a pulsing glow, and the sidebar will display details about that feature, such as its name or address.",
                "select_right_click": "{rightclick} Right-click on a feature to display the editing menu, which shows the commands that are available, such as rotating, moving, and deleting.",
                "multiselect_h": "Multiselect",
                "multiselect_shift_click": "`{shift}`+{leftclick} left-click to select several features together.  This makes it easier to move or delete multiple items.",
                "multiselect_lasso": "Another way to select multiple features is to hold down the `{shift}` key, then press and hold down the {leftclick} left mouse button and drag the mouse to draw a selection lasso. All of the points inside the lasso area will be selected.",
                "undo_redo_h": "Undo & Redo",
                "undo_redo": "Your edits are stored locally in your browser until you choose to save them to the OpenStreetMap server. You can undo edits by clicking the {undo} **Undo** button, and redo them by clicking the {redo} **Redo** button.",
                "save_h": "Save",
                "save": "Click {save} **Save** to finish your edits and send them to OpenStreetMap. You should remember to save your work frequently!",
                "save_validation": "On the save screen, you'll have a chance to review what you've done. iD will also perform some basic checks for missing data and may offer helpful suggestions and warnings if something doesn't seem right.",
                "upload_h": "Upload",
                "upload": "Before uploading your changes you must enter a [changeset comment](https://wiki.openstreetmap.org/wiki/Good_changeset_comments). Then click **Upload** to send your changes to OpenStreetMap, where they will be merged into the map and publicly visible to everyone.",
                "backups_h": "Automatic Backups",
                "backups": "If you can't finish your edits in one sitting, for example if your computer crashes or you close the browser tab, your edits are still saved in your browser's storage. You can come back later (on the same browser and computer), and iD will offer to restore your work.",
                "keyboard_h": "Keyboard Shortcuts",
                "keyboard": "You can view a list of keyboard shortcuts by pressing the `?` key."
            },
            "feature_editor": {
                "title": "Feature Editor",
                "intro": "The *feature editor* appears alongside the map, and allows you to see and edit all of the information for the selected feature.",
                "definitions": "The top section displays the feature's type. The middle section contains *fields* showing the feature's attributes, such as its name or address.",
                "type_h": "Feature Type",
                "type": "You can click on the feature type to change the feature to a different type. Everything that exists in the real world can be added to OpenStreetMap, so there are thousands of feature types to choose from.",
                "type_picker": "The type picker displays the most common feature types, such as parks, hospitals, restaurants, roads, and buildings. You can search for anything by typing what you're looking for in the search box. You can also click the {inspect} **Info** icon next to the feature type to learn more about it.",
                "fields_h": "Fields",
                "fields_all_fields": "The \"All fields\" section contains all of the feature's details that you may edit. In OpenStreetMap, all of the fields are optional, and it's OK to leave a field blank if you are unsure.",
                "fields_example": "Each feature type will display different fields. For example, a road may display fields for its surface and speed limit, but a restaurant may display fields for the type of food it serves and the hours it is open.",
                "fields_add_field": "You can also click the \"Add field\" dropdown to add more fields, such as a description, Wikipedia link, wheelchair access, and more.",
                "tags_h": "Tags",
                "tags_all_tags": "Below the fields section, you can expand the \"All tags\" section to edit any of the OpenStreetMap *tags* for the selected feature. Each tag consists of a *key* and *value*, data elements that define all of the features stored in OpenStreetMap.",
                "tags_resources": "Editing a feature's tags requires intermediate knowledge about OpenStreetMap. You should consult resources like the [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Main_Page) or [Taginfo](https://taginfo.openstreetmap.org/) to learn more about accepted OpenStreetMap tagging practices."
            },
            "points": {
                "title": "Points",
                "intro": "*Points* can be used to represent features such as shops, restaurants, and monuments. They mark a specific location, and describe what's there.",
                "add_point_h": "Adding Points",
                "add_point": "To add a point, click the {point} **Point** button on the toolbar above the map, or press the shortcut key `1`. This will change the mouse cursor to a cross symbol.",
                "add_point_finish": "To place the new point on the map, position the mouse cursor where the point should go, then {leftclick} left-click or press `Space`.",
                "move_point_h": "Moving Points",
                "move_point": "To move a point, place the mouse cursor over the point, then press and hold the {leftclick} left mouse button while dragging the point to its new location.",
                "delete_point_h": "Deleting Points",
                "delete_point": "It's OK to delete features that don't exist in the real world. Deleting a feature from OpenStreetMap removes it from the map that everyone uses, so you should make sure a feature is really gone before you delete it.",
                "delete_point_command": "To delete a point, {rightclick} right-click on the point to select it and show the edit menu, then use the {delete} **Delete** command."
            },
            "lines": {
                "title": "Lines",
                "intro": "*Lines* are used to represent features such as roads, railroads, and rivers. Lines should be drawn down the center of the feature that they represent.",
                "add_line_h": "Adding Lines",
                "add_line": "To add a line, click the {line} **Line** button on the toolbar above the map, or press the shortcut key `2`. This will change the mouse cursor to a cross symbol.",
                "add_line_draw": "Next, position the mouse cursor where the line should begin and {leftclick} left-click or press `Space` to begin placing nodes along the line. Continue placing more nodes by clicking or pressing `Space`. While drawing, you can zoom in or drag the map in order to add more detail.",
                "add_line_finish": "To finish a line, press `{return}` or click again on the last node.",
                "modify_line_h": "Modifying Lines",
                "modify_line_dragnode": "Often you'll see lines that aren't shaped correctly, for example a road that does not match up with the background imagery. To adjust the shape of a line, first {leftclick} left-click to select it. All nodes of the line will be drawn as small circles. You can then drag the nodes to better locations.",
                "modify_line_addnode": "You can also create new nodes along a line either by {leftclick}**x2** double-clicking on the line or by dragging the small triangles at the midpoints between nodes.",
                "connect_line_h": "Connecting Lines",
                "connect_line": "Having roads connected properly is important for the map and essential for providing driving directions.",
                "connect_line_display": "The connections between roads are drawn with gray circles. The endpoints of a line are drawn with larger white circles if they don't connect to anything.",
                "connect_line_drag": "To connect a line to another feature, drag one of the line's nodes onto the other feature until both features snap together. Tip: You can hold down the `{alt}` key to prevent nodes from connecting to other features.",
                "connect_line_tag": "If you know that the connection has traffic lights or crosswalks, you can add them by selecting the connecting node and using the feature editor to select the correct feature's type.",
                "disconnect_line_h": "Disconnecting Lines",
                "disconnect_line_command": "To disconnect a road from another feature, {rightclick} right-click the connecting node and select the {disconnect} **Disconnect** command from the editing menu.",
                "move_line_h": "Moving Lines",
                "move_line_command": "To move an entire line, {rightclick} right-click the line and select the {move} **Move** command from the editing menu. Then move the mouse, and {leftclick} left-click to place the line in a new location.",
                "move_line_connected": "Lines that are connected to other features will stay connected as you move the line to a new location. iD may prevent you from moving a line across another connected line.",
                "delete_line_h": "Deleting Lines",
                "delete_line": "If a line is entirely incorrect, for example a road that doesn't exist in the real world, it's OK to delete it. Be careful when deleting features: the background imagery you are using might be outdated, and a road that looks wrong could simply be newly built.",
                "delete_line_command": "To delete a line, {rightclick} right-click on the line to select it and show the edit menu, then use the {delete} **Delete** command."
            },
            "areas": {
                "title": "Areas",
                "intro": "*Areas* are used to show the boundaries of features like lakes, buildings, and residential areas. Areas should be traced around the edge of the feature that they represent, for example, around the base of a building.",
                "point_or_area_h": "Points or Areas?",
                "point_or_area": "Many features can be represented as points or areas. You should map buildings and property outlines as areas whenever possible. Place points inside a building area to represent businesses, amenities, and other features located inside the building.",
                "add_area_h": "Adding Areas",
                "add_area_command": "To add an area, click the {area} **Area** button on the toolbar above the map, or press the shortcut key `3`. This will change the mouse cursor to a cross symbol.",
                "add_area_draw": "Next, position the mouse cursor at one of the corners of the feature and {leftclick} left-click or press `Space` to begin placing nodes around the outer edge of the area. Continue placing more nodes by clicking or pressing `Space`. While drawing, you can zoom in or drag the map in order to add more detail.",
                "add_area_finish": "To finish an area, press `{return}` or click again on either the first or last node.",
                "square_area_h": "Square Corners",
                "square_area_command": "Many area features like buildings have square corners. To square the corners of an area, {rightclick} right-click the edge of the area and select the {orthogonalize} **Square** command from the editing menu.",
                "modify_area_h": "Modifying Areas",
                "modify_area_dragnode": "Often you'll see areas that aren't shaped correctly, for example a building that does not match up with the background imagery. To adjust the shape of an area, first {leftclick} left-click to select it. All nodes of the area will be drawn as small circles. You can then drag the nodes to better locations.",
                "modify_area_addnode": "You can also create new nodes along an area either by {leftclick}**x2** double-clicking on the edge of the area or by dragging the small triangles at the midpoints between nodes.",
                "delete_area_h": "Deleting Areas",
                "delete_area": "If an area is entirely incorrect, for example a building that doesn't exist in the real world, it's OK to delete it. Be cautious when deleting features - the background imagery you are using might be outdated, and a building that looks wrong could simply be newly built.",
                "delete_area_command": "To delete an area, {rightclick} right-click on the area to select it and show the edit menu, then use the {delete} **Delete** command."
            },
            "relations": {
                "title": "Relations",
                "intro": "A *relation* is a special type of feature in OpenStreetMap that groups together other features. The features that belong to a relation are called *members*, and each member can have a *role* in the relation.",
                "edit_relation_h": "Editing Relations",
                "edit_relation": "At the bottom of the feature editor, you can expand the \"All relations\" section to see if the selected feature is a member of any relations. You can then click on the relation to select and edit it.",
                "edit_relation_add": "To add a feature to a relation, select the feature, then click the {plus} add button in the \"All relations\" section of the feature editor. You can choose from a list of nearby relations, or choose the \"New relation...\" option.",
                "edit_relation_delete": "You can also click the {delete} **Delete** button to remove the selected feature from the relation. If you remove all of the members from a relation, the relation will be deleted automatically.",
                "maintain_relation_h": "Maintaining Relations",
                "maintain_relation": "For the most part, iD will maintain relations automatically as you edit. You should take care when replacing features that might be members of relations. For example if you delete a section of road and draw a new section of road to replace it, you should add the new section to the same relations (routes, turn restrictions, etc.) as the original.",
                "relation_types_h": "Relation Types",
                "multipolygon_h": "Multipolygons",
                "multipolygon": "A *multipolygon* relation is a group of one or more *outer* features and one or more inner features. The outer features define the outer edges of the multipolygon, and the inner features define sub-areas or holes cut out from the inside of the multipolygon.",
                "multipolygon_create": "To create a multipolygon, for example a building with a hole in it, draw the outer edge as an area and the inner edge as a line or different kind of area. Then `{shift}`+{leftclick} left-click to select both features, {rightclick} right-click to show the edit menu, and select the {merge} **Merge** command.",
                "multipolygon_merge": "Merging several lines or areas will create a new multipolygon relation with all selected areas as members. iD will choose the inner and outer roles automatically, based on which features are contained inside other features.",
                "turn_restriction_h": "Turn restrictions",
                "turn_restriction": "A *turn restriction* relation is a group of several road segments in an intersection. Turn restrictions consist of a *from* road, *via* node or roads, and a *to* road.",
                "turn_restriction_field": "To edit turn restrictions, select a junction node where two or more roads meet. The feature editor will display a special \"Turn Restrictions\" field containing a model of the intersection.",
                "turn_restriction_editing": "In the \"Turn Restrictions\" field, click to select a \"from\" road, and see whether turns are allowed or restricted to any of the \"to\" roads. You can click on the turn icons to toggle them between allowed and restricted. iD will create relations automatically and set the from, via, and to roles based on your choices.",
                "route_h": "Routes",
                "route": "A *route* relation is a group of one or more line features that together form a route network, like a bus route, train route, or highway route.",
                "route_add": "To add a feature to a route relation, select the feature and scroll down to the \"All relations\" section of the feature editor, then click the {plus} add button to add this feature to a nearby existing relation or a new relation.",
                "boundary_h": "Boundaries",
                "boundary": "A *boundary* relation is a group of one or more line features that together form an administrative boundary.",
                "boundary_add": "To add a feature to a boundary relation, select the feature and scroll down to the \"All relations\" section of the feature editor, then click the {plus} add button to add this feature to a nearby existing relation or a new relation."
            },
            "imagery": {
                "title": "Background Imagery",
                "intro": "The background imagery that appears beneath the map data is an important resource for mapping. This imagery can be aerial photos collected from satellites, airplanes, and drones, or it can be scanned historical maps or other freely available source data.",
                "sources_h": "Imagery Sources",
                "choosing": "To see which imagery sources are available for editing, click the {layers} **Background settings** button on the side of the map.",
                "sources": "By default, a [Bing Maps](https://www.bing.com/maps/) satellite layer is chosen as the background image. Depending on where you are editing, other imagery sources will be available. Some may be newer or have higher resolution, so it is always useful to check and see which layer is the best one to use as a mapping reference.",
                "offsets_h": "Adjusting Imagery Offset",
                "offset": "Imagery is sometimes offset slightly from accurate map data. If you see a lot of roads or buildings shifted from the background imagery, it may be the imagery that's incorrect, so don't move them all to match the background. Instead, you can adjust the background so that it matches the existing data by expanding the \"Adjust Imagery Offset\" section at the bottom of the Background Settings pane.",
                "offset_change": "Click on the small triangles to adjust the imagery offset in small steps, or hold the left mouse button and drag within the gray square to slide the imagery into alignment."
            },
            "streetlevel": {
                "title": "Street Level Photos",
                "intro": "Street level photos are useful for mapping traffic signs, businesses, and other details that you can't see from satellite and aerial images. The iD editor supports street level photos from [Mapillary](https://www.mapillary.com) and [OpenStreetCam](https://www.openstreetcam.org).",
                "using_h": "Using Street Level Photos",
                "using": "To use street level photos for mapping, click the {data} **Map data** panel on the side of the map to enable or disable the available photo layers.",
                "photos": "When enabled, the photo layer displays a line along the sequence of photos. At higher zoom levels, a circle marks at each photo location, and at even higher zoom levels, a cone indicates the direction the camera was facing when the photo was taken.",
                "viewer": "When you click on one of the photo locations, a photo viewer appears in the bottom corner of the map. The photo viewer contains controls to step forward and backward in the image sequence. It also shows the username of the person who captured the image, the date it was captured, and a link to view the image on the original site."
            },
            "gps": {
                "title": "GPS Traces",
                "intro": "Collected GPS traces are a valuable source of data for OpenStreetMap. This editor supports *.gpx*, *.geojson*, and *.kml* files on your local computer. You can collect GPS traces with a smartphone, sports watch, or other GPS device.",
                "survey": "For information on how to perform a GPS survey, read [Mapping with a smartphone, GPS, or paper](http://learnosm.org/en/mobile-mapping/).",
                "using_h": "Using GPS Traces",
                "using": "To use a GPS trace for mapping, drag and drop the data file onto the map editor. If it's recognized, it will be drawn on the map as a bright purple line. Click the {data} **Map data** panel on the side of the map to enable, disable, or zoom to your GPS data.",
                "tracing": "The GPS track isn't sent to OpenStreetMap - the best way to use it is to draw on the map, using it as a guide for the new features that you add.",
                "upload": "You can also [upload your GPS data to OpenStreetMap](https://www.openstreetmap.org/trace/create) for other users to use."
            }
        },
        "intro": {
            "done": "done",
            "ok": "OK",
            "graph": {
                "block_number": "<value for addr:block_number>",
                "city": "Three Rivers",
                "county": "<value for addr:county>",
                "district": "<value for addr:district>",
                "hamlet": "<value for addr:hamlet>",
                "neighbourhood": "<value for addr:neighbourhood>",
                "postcode": "49093",
                "province": "<value for addr:province>",
                "quarter": "<value for addr:quarter>",
                "state": "MI",
                "subdistrict": "<value for addr:subdistrict>",
                "suburb": "<value for addr:suburb>",
                "countrycode": "us",
                "name": {
                    "1st-avenue": "1st Avenue",
                    "2nd-avenue": "2nd Avenue",
                    "4th-avenue": "4th Avenue",
                    "5th-avenue": "5th Avenue",
                    "6th-avenue": "6th Avenue",
                    "6th-street": "6th Street",
                    "7th-avenue": "7th Avenue",
                    "8th-avenue": "8th Avenue",
                    "9th-avenue": "9th Avenue",
                    "10th-avenue": "10th Avenue",
                    "11th-avenue": "11th Avenue",
                    "12th-avenue": "12th Avenue",
                    "access-point-employment": "Access Point Employment",
                    "adams-street": "Adams Street",
                    "andrews-elementary-school": "Andrews Elementary School",
                    "andrews-street": "Andrews Street",
                    "armitage-street": "Armitage Street",
                    "barrows-school": "Barrows School",
                    "battle-street": "Battle Street",
                    "bennett-street": "Bennett Street",
                    "bowman-park": "Bowman Park",
                    "collins-drive": "Collins Drive",
                    "conrail-railroad": "Conrail Railroad",
                    "conservation-park": "Conservation Park",
                    "constantine-street": "Constantine Street",
                    "cushman-street": "Cushman Street",
                    "dollar-tree": "Dollar Tree",
                    "douglas-avenue": "Douglas Avenue",
                    "east-street": "East Street",
                    "elm-street": "Elm Street",
                    "flower-street": "Flower Street",
                    "foster-street": "Foster Street",
                    "french-street": "French Street",
                    "garden-street": "Garden Street",
                    "gem-pawnbroker": "Gem Pawnbroker",
                    "golden-finch-framing": "Golden Finch Framing",
                    "grant-avenue": "Grant Avenue",
                    "hoffman-pond": "Hoffman Pond",
                    "hoffman-street": "Hoffman Street",
                    "hook-avenue": "Hook Avenue",
                    "jefferson-street": "Jefferson Street",
                    "kelsey-street": "Kelsey Street",
                    "lafayette-park": "LaFayette Park",
                    "las-coffee-cafe": "L.A.'s Coffee Cafe",
                    "lincoln-avenue": "Lincoln Avenue",
                    "lowrys-books": "Lowry's Books",
                    "lynns-garage": "Lynn's Garage",
                    "main-street-barbell": "Main Street Barbell",
                    "main-street-cafe": "Main Street Cafe",
                    "main-street-fitness": "Main Street Fitness",
                    "main-street": "Main Street",
                    "maple-street": "Maple Street",
                    "marina-park": "Marina Park",
                    "market-street": "Market Street",
                    "memory-isle-park": "Memory Isle Park",
                    "memory-isle": "Memory Isle",
                    "michigan-avenue": "Michigan Avenue",
                    "middle-street": "Middle Street",
                    "millard-street": "Millard Street",
                    "moore-street": "Moore Street",
                    "morris-avenue": "Morris Avenue",
                    "mural-mall": "Mural Mall",
                    "paisanos-bar-and-grill": "Paisano's Bar and Grill",
                    "paisley-emporium": "Paisley Emporium",
                    "paparazzi-tattoo": "Paparazzi Tattoo",
                    "pealer-street": "Pealer Street",
                    "pine-street": "Pine Street",
                    "pizza-hut": "Pizza Hut",
                    "portage-avenue": "Portage Avenue",
                    "portage-river": "Portage River",
                    "preferred-insurance-services": "Preferred Insurance Services",
                    "railroad-drive": "Railroad Drive",
                    "river-city-appliance": "River City Appliance",
                    "river-drive": "River Drive",
                    "river-road": "River Road",
                    "river-street": "River Street",
                    "riverside-cemetery": "Riverside Cemetery",
                    "riverwalk-trail": "Riverwalk Trail",
                    "riviera-theatre": "Riviera Theatre",
                    "rocky-river": "Rocky River",
                    "saint-joseph-river": "Saint Joseph River",
                    "scidmore-park-petting-zoo": "Scidmore Park Petting Zoo",
                    "scidmore-park": "Scidmore Park",
                    "scouter-park": "Scouter Park",
                    "sherwin-williams": "Sherwin-Williams",
                    "south-street": "South Street",
                    "southern-michigan-bank": "Southern Michigan Bank",
                    "spring-street": "Spring Street",
                    "sturgeon-river-road": "Sturgeon River Road",
                    "three-rivers-city-hall": "Three Rivers City Hall",
                    "three-rivers-elementary-school": "Three Rivers Elementary School",
                    "three-rivers-fire-department": "Three Rivers Fire Department",
                    "three-rivers-high-school": "Three Rivers High School",
                    "three-rivers-middle-school": "Three Rivers Middle School",
                    "three-rivers-municipal-airport": "Three Rivers Municipal Airport",
                    "three-rivers-post-office": "Three Rivers Post Office",
                    "three-rivers-public-library": "Three Rivers Public Library",
                    "three-rivers": "Three Rivers",
                    "unique-jewelry": "Unique Jewelry",
                    "walnut-street": "Walnut Street",
                    "washington-street": "Washington Street",
                    "water-street": "Water Street",
                    "west-street": "West Street",
                    "wheeler-street": "Wheeler Street",
                    "william-towing": "William Towing",
                    "willow-drive": "Willow Drive",
                    "wood-street": "Wood Street",
                    "world-fare": "World Fare"
                }
            },
            "welcome": {
                "title": "Welcome",
                "welcome": "Welcome! This walkthrough will teach you the basics of editing on OpenStreetMap.",
                "practice": "All of the data in this walkthrough is just for practicing, and any edits that you make in the walkthrough will not be saved.",
                "words": "This walkthrough will introduce some new words and concepts. When we introduce a new word, we'll use *italics*.",
                "mouse": "You can use any input device to edit the map, but this walkthrough assumes you have a mouse with left and right buttons. **If you want to attach a mouse, do so now, then click OK.**",
                "leftclick": "When this tutorial asks you to click or double-click, we mean with the left button. On a trackpad it might be a single-click or single-finger tap. **Left-click {num} times.**",
                "rightclick": "Sometimes we'll also ask you to right-click. This might be the same as control-click, or two-finger tap on a trackpad. Your keyboard might even have a 'menu' key that works like right-click. **Right-click {num} times.**",
                "chapters": "So far, so good! You can use the buttons below to skip chapters at any time or to restart a chapter if you get stuck. Let's begin! **Click '{next}' to continue.**"
            },
            "navigation": {
                "title": "Navigation",
                "drag": "The main map area shows OpenStreetMap data on top of a background.{br}You can drag the map by pressing and holding the left mouse button while moving the mouse around. You can also use the arrow keys on your keyboard. **Drag the map!**",
                "zoom": "You can zoom in or out by scrolling with the mouse wheel or trackpad, or by clicking the {plus} / {minus} buttons. **Zoom the map!**",
                "features": "We use the word *features* to describe the things that appear on the map. Anything in the real world can be mapped as a feature on OpenStreetMap.",
                "points_lines_areas": "Map features are represented using *points, lines, or areas.*",
                "nodes_ways": "In OpenStreetMap, points are sometimes called *nodes*, and lines and areas are sometimes called *ways*.",
                "click_townhall": "All features on the map can be selected by clicking on them. **Click on the point to select it.**",
                "selected_townhall": "Great! The point is now selected. Selected features are drawn with a pulsing glow.",
                "editor_townhall": "When a feature is selected, the *feature editor* is displayed alongside the map.",
                "preset_townhall": "The top part of the feature editor shows the feature's type. This point is a {preset}.",
                "fields_townhall": "The middle part of the feature editor contains *fields* showing the feature's attributes, such as its name and address.",
                "close_townhall": "**Close the feature editor by hitting escape or pressing the {button} button in the upper corner.**",
                "search_street": "You can also search for features in the current view, or worldwide. **Search for '{name}'.**",
                "choose_street": "**Choose {name} from the list to select it.**",
                "selected_street": "Great! {name} is now selected.",
                "editor_street": "The fields shown for a street are different than the fields that were shown for the town hall.{br}For this selected street, the feature editor shows fields like '{field1}' and '{field2}'. **Close the feature editor by hitting escape or pressing the {button} button.**",
                "play": "Try moving the map and clicking on some other features to see what kinds of things can be added to OpenStreetMap. **When you are ready to continue to the next chapter, click '{next}'.**"
            },
            "points": {
                "title": "Points",
                "add_point": "*Points* can be used to represent features such as shops, restaurants, and monuments.{br}They mark a specific location, and describe what's there. **Click the {button} Point button to add a new point.**",
                "place_point": "To place the new point on the map, position your mouse cursor where the point should go, then left-click or press the spacebar. **Move the mouse pointer over this building, then left-click or press the spacebar.**",
                "search_cafe": "There are many different features that can be represented by points. The point you just added is a cafe. **Search for '{preset}'.**",
                "choose_cafe": "**Choose {preset} from the list.**",
                "feature_editor": "The point is now marked as a cafe. Using the feature editor, we can add more information about the cafe.",
                "add_name": "In OpenStreetMap, all of the fields are optional, and it's OK to leave a field blank if you are unsure.{br}Let's pretend that you have local knowledge of this cafe, and you know its name. **Add a name for the cafe.**",
                "add_close": "The feature editor will remember all of your changes automatically. **When you are finished adding the name, hit escape, enter, or click the {button} button to close the feature editor.**",
                "reselect": "Often points will already exist, but have mistakes or be incomplete. We can edit existing points. **Click to select the cafe you just created.**",
                "update": "Let's fill in some more details for this cafe. You can change its name, add a cuisine, or add an address. **Change the cafe details.**",
                "update_close": "**When you are finished updating the cafe, hit escape, enter, or click the {button} button to close the feature editor.**",
                "rightclick": "You can right-click on any feature to see the *edit menu*, which shows a list of editing operations that can be performed. **Right-click to select the point you created and show the edit menu.**",
                "delete": "It's OK to delete features that don't exist in the real world.{br}Deleting a feature from OpenStreetMap removes it from the map that everyone uses, so you should make sure a feature is really gone before you delete it. **Click on the {button} button to delete the point.**",
                "undo": "You can always undo any changes up until you save your edits to OpenStreetMap. **Click on the {button} button to undo the delete and get the point back.**",
                "play": "Now that you know how to create and edit points, try creating a few more points for practice! **When you are ready to continue to the next chapter, click '{next}'.**"
            },
            "areas": {
                "title": "Areas",
                "add_playground": "*Areas* are used to show the boundaries of features like lakes, buildings, and residential areas.{br}They can be also be used for more detailed mapping of many features you might normally map as points. **Click the {button} Area button to add a new area.**",
                "start_playground": "Let's add this playground to the map by drawing an area. Areas are drawn by placing *nodes* along the outer edge of the feature. **Click or press spacebar to place a starting node on one of the corners of the playground.**",
                "continue_playground": "Continue drawing the area by placing more nodes along the playground's edge. It is OK to connect the area to the existing walking paths.{br}Tip: You can hold down the '{alt}' key to prevent nodes from connecting to other features. **Continue drawing an area for the playground.**",
                "finish_playground": "Finish the area by pressing enter, or clicking again on either the first or last node. **Finish drawing an area for the playground.**",
                "search_playground": "**Search for '{preset}'.**",
                "choose_playground": "**Choose {preset} from the list.**",
                "add_field": "This playground doesn't have an official name, so we won't add anything in the Name field.{br}Instead let's add some additional details about the playground to the Description field. **Open the Add Field list.**",
                "choose_field": "**Choose {field} from the list.**",
                "retry_add_field": "You didn't select the {field} field. Let's try again.",
                "describe_playground": "**Add a description, then click the {button} button to close the feature editor.**",
                "play": "Good job! Try drawing a few more areas, and see what other kinds of area features you can add to OpenStreetMap. **When you are ready to continue to the next chapter, click '{next}'.**"
            },
            "lines": {
                "title": "Lines",
                "add_line": "*Lines* are used to represent features such as roads, railroads, and rivers. **Click the {button} Line button to add a new line.**",
                "start_line": "Here is a road that is missing. Let's add it!{br}In OpenStreetMap, lines should be drawn down the center of the road. You can drag and zoom the map while drawing if necessary. **Start a new line by clicking at the top end of this missing road.**",
                "intersect": "Click or press spacebar to add more nodes to the line.{br}Roads, and many other types of lines, are part of a larger network. It is important for these lines to be connected properly in order for routing applications to work. **Click on {name} to create an intersection connecting the two lines.**",
                "retry_intersect": "The road needs to intersect {name}. Let's try again!",
                "continue_line": "Continue drawing the line for the new road. Remember that you can drag and zoom the map if needed.{br}When you are finished drawing, click on the last node again. **Finish drawing the road.**",
                "choose_category_road": "**Select {category} from the list.**",
                "choose_preset_residential": "There are many different types of roads, but this one is a residential road. **Choose the {preset} type.**",
                "retry_preset_residential": "You didn't select the {preset} type. **Click here to choose again.**",
                "name_road": "**Give this road a name, then hit escape, enter, or click the {button} button to close the feature editor.**",
                "did_name_road": "Looks good! Next we will learn how to update the shape of a line.",
                "update_line": "Sometimes you will need to change the shape of an existing line. Here is a road that doesn't look quite right.",
                "add_node": "We can add some nodes to this line to improve its shape. One way to add a node is to double-click the line where you want to add a node. **Double-click on the line to create a new node.**",
                "start_drag_endpoint": "When a line is selected, you can drag any of its nodes by clicking and holding down the left mouse button while you drag. **Drag the endpoint to the place where these roads should intersect.**",
                "finish_drag_endpoint": "This spot looks good. **Release the left mouse button to finish dragging.**",
                "start_drag_midpoint": "Small triangles are drawn at the *midpoints* between nodes. Another way to create a new node is to drag a midpoint to a new location. **Drag the midpoint triangle to create a new node along the curve of the road.**",
                "continue_drag_midpoint": "This line is looking much better! Continue to adjust this line by double-clicking or dragging midpoints until the curve matches the road shape. **When you're happy with how the line looks, click OK.**",
                "delete_lines": "It's OK to delete lines for roads that don't exist in the real world.{br}Here's an example where the city planned a {street} but never built it. We can improve this part of the map by deleting the extra lines.",
                "rightclick_intersection": "The last real street is {street1}, so we will *split* {street2} at this intersection and remove everything above it. **Right click on the intersection node.**",
                "split_intersection": "**Click on the {button} button to split {street}.**",
                "retry_split": "You didn't click the Split button. Try again.",
                "did_split_multi": "Good job! {street1} is now split into two pieces. The top part can be removed. **Click the top part of {street2} to select it.**",
                "did_split_single": "**Click the top part of {street2} to select it.**",
                "multi_select": "{selected} is now selected. Let's also select {other1}. You can shift-click to select multiple things. **Shift-click on {other2}.**",
                "multi_rightclick": "Good! Both lines to delete are now selected. **Right-click on one of the lines to show the edit menu.**",
                "multi_delete": "**Click on the {button} button to delete the extra lines.**",
                "retry_delete": "You didn't click the Delete button. Try again.",
                "play": "Great! Use the skills that you've learned in this chapter to practice editing some more lines. **When you are ready to continue to the next chapter, click '{next}'.**"
            },
            "buildings": {
                "title": "Buildings",
                "add_building": "OpenStreetMap is the world's largest database of buildings.{br}You can help improve this database by tracing buildings that aren't already mapped. **Click the {button} Area button to add a new area.**",
                "start_building": "Let's add this house to the map by tracing its outline.{br}Buildings should be traced around their footprint as accurately as possible. **Click or press spacebar to place a starting node on one of the corners of the building.**",
                "continue_building": "Continue adding more nodes to trace the outline of the building. Remember that you can zoom in if you want to add more details.{br}Finish the building by pressing enter, or clicking again on either the first or last node. **Finish tracing the building.**",
                "retry_building": "It looks like you had some trouble placing the nodes at the building corners. Try again!",
                "choose_category_building": "**Choose {category} from the list.**",
                "choose_preset_house": "There are many different types of buildings, but this one is clearly a house.{br}If you're not sure of the type, it's OK to just choose the generic Building type. **Choose the {preset} type.**",
                "close": "**Hit escape or click the {button} button to close the feature editor.**",
                "rightclick_building": "**Right-click to select the building you created and show the edit menu.**",
                "square_building": "The house that you just added will look even better with perfectly square corners. **Click on the {button} button to square the building shape.**",
                "retry_square": "You didn't click the Square button. Try again.",
                "done_square": "See how the corners of the building moved into place? Let's learn another useful trick.",
                "add_tank": "Next we'll trace this circular storage tank. **Click the {button} Area button to add a new area.**",
                "start_tank": "Don't worry, you won't need to draw a perfect circle. Just draw an area inside the tank that touches its edge. **Click or press spacebar to place a starting node on the edge of the tank.**",
                "continue_tank": "Add a few more nodes around the edge. The circle will be created outside the nodes that you draw.{br}Finish the area by pressing enter, or clicking again on either the first or last node. **Finish tracing the tank.**",
                "search_tank": "**Search for '{preset}'.**",
                "choose_tank": "**Choose {preset} from the list.**",
                "rightclick_tank": "**Right-click to select the storage tank you created and show the edit menu.**",
                "circle_tank": "**Click on the {button} button to make the tank a circle.**",
                "retry_circle": "You didn't click the Circularize button. Try again.",
                "play": "Great Job! Practice tracing a few more buildings, and try some of the other commands on the edit menu. **When you are ready to continue to the next chapter, click '{next}'.**"
            },
            "startediting": {
                "title": "Start Editing",
                "help": "You're now ready to edit OpenStreetMap!{br}You can replay this walkthrough anytime or view more documentation by clicking the {button} Help button or pressing the '{key}' key.",
                "shortcuts": "You can view a list of commands along with their keyboard shortcuts by pressing the '{key}' key.",
                "save": "Don't forget to regularly save your changes!",
                "start": "Start mapping!"
            }
        },
        "shortcuts": {
            "title": "Keyboard shortcuts",
            "tooltip": "Show the keyboard shortcuts screen.",
            "toggle": {
                "key": "?"
            },
            "key": {
                "alt": "Alt",
                "backspace": "Backspace",
                "cmd": "Cmd",
                "ctrl": "Ctrl",
                "delete": "Delete",
                "del": "Del",
                "end": "End",
                "enter": "Enter",
                "esc": "Esc",
                "home": "Home",
                "option": "Option",
                "pause": "Pause",
                "pgdn": "PgDn",
                "pgup": "PgUp",
                "return": "Return",
                "shift": "Shift",
                "space": "Space"
            },
            "gesture": {
                "drag": "drag"
            },
            "or": "-or-",
            "browsing": {
                "title": "Browsing",
                "navigation": {
                    "title": "Navigation",
                    "pan": "Pan map",
                    "pan_more": "Pan map by one screenful",
                    "zoom": "Zoom in / Zoom out",
                    "zoom_more": "Zoom in / Zoom out by a lot"
                },
                "help": {
                    "title": "Help",
                    "help": "Show help/documentation",
                    "keyboard": "Show keyboard shortcuts"
                },
                "display_options": {
                    "title": "Display options",
                    "background": "Show background options",
                    "background_switch": "Switch back to last background",
                    "map_data": "Show map data options",
                    "fullscreen": "Enter full screen mode",
                    "wireframe": "Toggle wireframe mode",
                    "minimap": "Toggle minimap"
                },
                "selecting": {
                    "title": "Selecting features",
                    "select_one": "Select a single feature",
                    "select_multi": "Select multiple features",
                    "lasso": "Draw a selection lasso around features",
                    "search": "Find features matching search text"
                },
                "with_selected": {
                    "title": "With feature selected",
                    "edit_menu": "Toggle edit menu"
                },
                "vertex_selected": {
                    "title": "With node selected",
                    "previous": "Jump to previous node",
                    "next": "Jump to next node",
                    "first": "Jump to first node",
                    "last": "Jump to last node",
                    "change_parent": "Switch parent way"
                }
            },
            "editing": {
                "title": "Editing",
                "drawing": {
                    "title": "Drawing",
                    "add_point": "'Add point' mode",
                    "add_line": "'Add line' mode",
                    "add_area": "'Add area' mode",
                    "place_point": "Place a point",
                    "disable_snap": "Hold to disable point snapping",
                    "stop_line": "Finish drawing a line or area"
                },
                "operations": {
                    "title": "Operations",
                    "continue_line": "Continue a line at the selected node",
                    "merge": "Combine (merge) selected features",
                    "disconnect": "Disconnect features at the selected node",
                    "split": "Split a line into two at the selected node",
                    "reverse": "Reverse a line",
                    "move": "Move selected features",
                    "rotate": "Rotate selected features",
                    "orthogonalize": "Straighten line / Square area corners",
                    "circularize": "Circularize a closed line or area",
                    "reflect_long": "Reflect features across the longer axis",
                    "reflect_short": "Reflect features across the shorter axis",
                    "delete": "Delete selected features"
                },
                "commands": {
                    "title": "Commands",
                    "copy": "Copy selected features",
                    "paste": "Paste copied features",
                    "undo": "Undo last action",
                    "redo": "Redo last action",
                    "save": "Save changes"
                }
            },
            "tools": {
                "title": "Tools",
                "info": {
                    "title": "Information",
                    "all": "Toggle all information panels",
                    "background": "Toggle background panel",
                    "history": "Toggle history panel",
                    "location": "Toggle location panel",
                    "measurement": "Toggle measurement panel"
                }
            }
        },
        "presets": {
            "categories": {
                "category-barrier": {
                    "name": "Barrier Features"
                },
                "category-building": {
                    "name": "Building Features"
                },
                "category-golf": {
                    "name": "Golf Features"
                },
                "category-landuse": {
                    "name": "Land Use Features"
                },
                "category-natural-area": {
                    "name": "Natural Features"
                },
                "category-natural-line": {
                    "name": "Natural Features"
                },
                "category-natural-point": {
                    "name": "Natural Features"
                },
                "category-path": {
                    "name": "Path Features"
                },
                "category-rail": {
                    "name": "Rail Features"
                },
                "category-restriction": {
                    "name": "Restriction Features"
                },
                "category-road": {
                    "name": "Road Features"
                },
                "category-route": {
                    "name": "Route Features"
                },
                "category-water-area": {
                    "name": "Water Features"
                },
                "category-water-line": {
                    "name": "Water Features"
                }
            },
            "fields": {
                "access_simple": {
                    "label": "Allowed Access"
                },
                "access": {
                    "label": "Allowed Access",
                    "placeholder": "Not Specified",
                    "types": {
                        "access": "All",
                        "foot": "Foot",
                        "motor_vehicle": "Motor Vehicles",
                        "bicycle": "Bicycles",
                        "horse": "Horses"
                    },
                    "options": {
                        "yes": {
                            "title": "Allowed",
                            "description": "Access permitted by law; a right of way"
                        },
                        "no": {
                            "title": "Prohibited",
                            "description": "Access not permitted to the general public"
                        },
                        "permissive": {
                            "title": "Permissive",
                            "description": "Access permitted until such time as the owner revokes the permission"
                        },
                        "private": {
                            "title": "Private",
                            "description": "Access permitted only with permission of the owner on an individual basis"
                        },
                        "designated": {
                            "title": "Designated",
                            "description": "Access permitted according to signs or specific local laws"
                        },
                        "destination": {
                            "title": "Destination",
                            "description": "Access permitted only to reach a destination"
                        },
                        "dismount": {
                            "title": "Dismount",
                            "description": "Access permitted but rider must dismount"
                        }
                    }
                },
                "address": {
                    "label": "Address",
                    "placeholders": {
                        "block_number": "Block Number",
                        "block_number!jp": "Block No.",
                        "city": "City",
                        "city!jp": "City/Town/Village/Tokyo Special Ward",
                        "city!vn": "City/Town",
                        "conscriptionnumber": "123",
                        "country": "Country",
                        "county": "County",
                        "county!jp": "District",
                        "district": "District",
                        "district!vn": "Arrondissement/Town/District",
                        "floor": "Floor",
                        "hamlet": "Hamlet",
                        "housename": "Housename",
                        "housenumber": "123",
                        "housenumber!jp": "Building No./Lot No.",
                        "neighbourhood": "Neighbourhood",
                        "neighbourhood!jp": "Chōme/Aza/Koaza",
                        "place": "Place",
                        "postcode": "Postcode",
                        "province": "Province",
                        "province!jp": "Prefecture",
                        "quarter": "Quarter",
                        "quarter!jp": "Ōaza/Machi",
                        "state": "State",
                        "street": "Street",
                        "subdistrict": "Subdistrict",
                        "subdistrict!vn": "Ward/Commune/Townlet",
                        "suburb": "Suburb",
                        "suburb!jp": "Ward",
                        "unit": "Unit"
                    }
                },
                "admin_level": {
                    "label": "Admin Level"
                },
                "aerialway": {
                    "label": "Type"
                },
                "aerialway/access": {
                    "label": "Access",
                    "options": {
                        "entry": "Entry",
                        "exit": "Exit",
                        "both": "Both"
                    }
                },
                "aerialway/bubble": {
                    "label": "Bubble"
                },
                "aerialway/capacity": {
                    "label": "Capacity (per hour)",
                    "placeholder": "500, 2500, 5000..."
                },
                "aerialway/duration": {
                    "label": "Duration (minutes)",
                    "placeholder": "1, 2, 3..."
                },
                "aerialway/heating": {
                    "label": "Heated"
                },
                "aerialway/occupancy": {
                    "label": "Occupancy",
                    "placeholder": "2, 4, 8..."
                },
                "aerialway/summer/access": {
                    "label": "Access (summer)",
                    "options": {
                        "entry": "Entry",
                        "exit": "Exit",
                        "both": "Both"
                    }
                },
                "aeroway": {
                    "label": "Type"
                },
                "agrarian": {
                    "label": "Products"
                },
                "amenity": {
                    "label": "Type"
                },
                "animal_boarding": {
                    "label": "For Animals"
                },
                "animal_breeding": {
                    "label": "For Animals"
                },
                "animal_shelter": {
                    "label": "For Animals"
                },
                "area/highway": {
                    "label": "Type"
                },
                "artist": {
                    "label": "Artist"
                },
                "artwork_type": {
                    "label": "Type"
                },
                "atm": {
                    "label": "ATM"
                },
                "backrest": {
                    "label": "Backrest"
                },
                "barrier": {
                    "label": "Type"
                },
                "bath/open_air": {
                    "label": "Open Air"
                },
                "bath/sand_bath": {
                    "label": "Sand Bath"
                },
                "bath/type": {
                    "label": "Specialty",
                    "options": {
                        "onsen": "Japanese Onsen",
                        "foot_bath": "Foot Bath",
                        "hot_spring": "Hot Spring"
                    }
                },
                "beauty": {
                    "label": "Shop Type"
                },
                "bench": {
                    "label": "Bench"
                },
                "bicycle_parking": {
                    "label": "Type"
                },
                "bin": {
                    "label": "Waste Bin"
                },
                "blood_components": {
                    "label": "Blood Components",
                    "options": {
                        "whole": "whole blood",
                        "plasma": "plasma",
                        "platelets": "platelets",
                        "stemcells": "stem cell samples"
                    }
                },
                "board_type": {
                    "label": "Type"
                },
                "boules": {
                    "label": "Type"
                },
                "boundary": {
                    "label": "Type"
                },
                "brand": {
                    "label": "Brand"
                },
                "bridge": {
                    "label": "Type",
                    "placeholder": "Default"
                },
                "building_area": {
                    "label": "Building"
                },
                "building": {
                    "label": "Building"
                },
                "bunker_type": {
                    "label": "Type"
                },
                "cables": {
                    "label": "Cables",
                    "placeholder": "1, 2, 3..."
                },
                "camera/direction": {
                    "label": "Direction (Degrees Clockwise)",
                    "placeholder": "45, 90, 180, 270"
                },
                "camera/mount": {
                    "label": "Camera Mount"
                },
                "camera/type": {
                    "label": "Camera Type",
                    "options": {
                        "fixed": "Fixed",
                        "panning": "Panning",
                        "dome": "Dome"
                    }
                },
                "capacity": {
                    "label": "Capacity",
                    "placeholder": "50, 100, 200..."
                },
                "cardinal_direction": {
                    "label": "Direction",
                    "options": {
                        "N": "North",
                        "E": "East",
                        "S": "South",
                        "W": "West",
                        "NE": "Northeast",
                        "SE": "Southeast",
                        "SW": "Southwest",
                        "NW": "Northwest",
                        "NNE": "North-northeast",
                        "ENE": "East-northeast",
                        "ESE": "East-southeast",
                        "SSE": "South-southeast",
                        "SSW": "South-southwest",
                        "WSW": "West-southwest",
                        "WNW": "West-northwest",
                        "NNW": "North-northwest"
                    }
                },
                "castle_type": {
                    "label": "Type"
                },
                "clock_direction": {
                    "label": "Direction",
                    "options": {
                        "clockwise": "Clockwise",
                        "anticlockwise": "Counterclockwise"
                    }
                },
                "clothes": {
                    "label": "Clothes"
                },
                "club": {
                    "label": "Type"
                },
                "collection_times": {
                    "label": "Collection Times"
                },
                "comment": {
                    "label": "Changeset Comment",
                    "placeholder": "Brief description of your contributions (required)"
                },
                "communication_multi": {
                    "label": "Communication Types"
                },
                "construction": {
                    "label": "Type"
                },
                "contact/webcam": {
                    "label": "Webcam URL",
                    "placeholder": "http://example.com/"
                },
                "content": {
                    "label": "Content"
                },
                "country": {
                    "label": "Country"
                },
                "covered": {
                    "label": "Covered"
                },
                "craft": {
                    "label": "Type"
                },
                "crane/type": {
                    "label": "Crane Type",
                    "options": {
                        "portal_crane": "Portal Crane",
                        "floor-mounted_crane": "Floor-mounted Crane",
                        "travel_lift": "Travel Lift"
                    }
                },
                "crop": {
                    "label": "Crops"
                },
                "crossing": {
                    "label": "Type"
                },
                "cuisine": {
                    "label": "Cuisines"
                },
                "currency_multi": {
                    "label": "Currency Types"
                },
                "cutting": {
                    "label": "Type",
                    "placeholder": "Default"
                },
                "cycle_network": {
                    "label": "Network"
                },
                "cycleway": {
                    "label": "Bike Lanes",
                    "placeholder": "none",
                    "types": {
                        "cycleway:left": "Left side",
                        "cycleway:right": "Right side"
                    },
                    "options": {
                        "none": {
                            "title": "None",
                            "description": "No bike lane"
                        },
                        "lane": {
                            "title": "Standard bike lane",
                            "description": "A bike lane separated from auto traffic by a painted line"
                        },
                        "shared_lane": {
                            "title": "Shared bike lane",
                            "description": "A bike lane with no separation from auto traffic"
                        },
                        "track": {
                            "title": "Bike track",
                            "description": "A bike lane separated from traffic by a physical barrier"
                        },
                        "share_busway": {
                            "title": "Bike lane shared with bus",
                            "description": "A bike lane shared with a bus lane"
                        },
                        "opposite_lane": {
                            "title": "Opposite bike lane",
                            "description": "A bike lane that travels in the opposite direction of traffic"
                        },
                        "opposite": {
                            "title": "Contraflow bike lane",
                            "description": "A bike lane that travels in both directions on a one-way street"
                        }
                    }
                },
                "date": {
                    "label": "Date"
                },
                "delivery": {
                    "label": "Delivery"
                },
                "denomination": {
                    "label": "Denomination"
                },
                "denotation": {
                    "label": "Denotation"
                },
                "description": {
                    "label": "Description"
                },
                "devices": {
                    "label": "Devices",
                    "placeholder": "1, 2, 3..."
                },
                "diaper": {
                    "label": "Diaper Changing Available"
                },
                "display": {
                    "label": "Display"
                },
                "dock": {
                    "label": "Type"
                },
                "drive_through": {
                    "label": "Drive-Through"
                },
                "duration": {
                    "label": "Duration",
                    "placeholder": "00:00"
                },
                "electrified": {
                    "label": "Electrification",
                    "placeholder": "Contact Line, Electrified Rail...",
                    "options": {
                        "contact_line": "Contact Line",
                        "rail": "Electrified Rail",
                        "yes": "Yes (unspecified)",
                        "no": "No"
                    }
                },
                "elevation": {
                    "label": "Elevation"
                },
                "email": {
                    "label": "Email",
                    "placeholder": "example@example.com"
                },
                "embankment": {
                    "label": "Type",
                    "placeholder": "Default"
                },
                "emergency": {
                    "label": "Emergency"
                },
                "entrance": {
                    "label": "Type"
                },
                "except": {
                    "label": "Exceptions"
                },
                "fax": {
                    "label": "Fax",
                    "placeholder": "+31 42 123 4567"
                },
                "fee": {
                    "label": "Fee"
                },
                "fence_type": {
                    "label": "Type"
                },
                "fire_hydrant/position": {
                    "label": "Position",
                    "options": {
                        "lane": "Lane",
                        "parking_lot": "Parking Lot",
                        "sidewalk": "Sidewalk",
                        "green": "Green"
                    }
                },
                "fire_hydrant/type": {
                    "label": "Type",
                    "options": {
                        "pillar": "Pillar/Aboveground",
                        "underground": "Underground",
                        "wall": "Wall",
                        "pond": "Pond"
                    }
                },
                "fitness_station": {
                    "label": "Equipment Type"
                },
                "fixme": {
                    "label": "Fix Me"
                },
                "ford": {
                    "label": "Type",
                    "placeholder": "Default"
                },
                "frequency": {
                    "label": "Operating Frequency"
                },
                "fuel_multi": {
                    "label": "Fuel Types"
                },
                "fuel": {
                    "label": "Fuel"
                },
                "gauge": {
                    "label": "Gauge"
                },
                "gender": {
                    "label": "Gender",
                    "placeholder": "Unknown",
                    "options": {
                        "male": "Male",
                        "female": "Female",
                        "unisex": "Unisex"
                    }
                },
                "generator/method": {
                    "label": "Method"
                },
                "generator/output/electricity": {
                    "label": "Power Output",
                    "placeholder": "50 MW, 100 MW, 200 MW..."
                },
                "generator/source": {
                    "label": "Source"
                },
                "generator/type": {
                    "label": "Type"
                },
                "government": {
                    "label": "Type"
                },
                "grape_variety": {
                    "label": "Grape Varieties"
                },
                "handicap": {
                    "label": "Handicap",
                    "placeholder": "1-18"
                },
                "handrail": {
                    "label": "Handrail"
                },
                "hashtags": {
                    "label": "Suggested Hashtags",
                    "placeholder": "#example"
                },
                "healthcare": {
                    "label": "Type"
                },
                "healthcare/speciality": {
                    "label": "Specialties"
                },
                "height": {
                    "label": "Height (Meters)"
                },
                "highway": {
                    "label": "Type"
                },
                "historic": {
                    "label": "Type"
                },
                "historic/civilization": {
                    "label": "Historic Civilization"
                },
                "hoops": {
                    "label": "Hoops",
                    "placeholder": "1, 2, 4..."
                },
                "iata": {
                    "label": "IATA"
                },
                "icao": {
                    "label": "ICAO"
                },
                "incline_steps": {
                    "label": "Incline",
                    "options": {
                        "up": "Up",
                        "down": "Down"
                    }
                },
                "incline": {
                    "label": "Incline"
                },
                "indoor": {
                    "label": "Indoor"
                },
                "information": {
                    "label": "Type"
                },
                "inscription": {
                    "label": "Inscription"
                },
                "intermittent": {
                    "label": "Intermittent"
                },
                "internet_access": {
                    "label": "Internet Access",
                    "options": {
                        "yes": "Yes",
                        "no": "No",
                        "wlan": "Wifi",
                        "wired": "Wired",
                        "terminal": "Terminal"
                    }
                },
                "internet_access/fee": {
                    "label": "Internet Access Fee"
                },
                "internet_access/ssid": {
                    "label": "SSID (Network Name)"
                },
                "kerb": {
                    "label": "Curb"
                },
                "label": {
                    "label": "Label"
                },
                "lamp_type": {
                    "label": "Type"
                },
                "landuse": {
                    "label": "Type"
                },
                "lanes": {
                    "label": "Lanes",
                    "placeholder": "1, 2, 3..."
                },
                "layer": {
                    "label": "Layer",
                    "placeholder": "0"
                },
                "leaf_cycle_singular": {
                    "label": "Leaf Cycle",
                    "options": {
                        "evergreen": "Evergreen",
                        "deciduous": "Deciduous",
                        "semi_evergreen": "Semi-Evergreen",
                        "semi_deciduous": "Semi-Deciduous"
                    }
                },
                "leaf_cycle": {
                    "label": "Leaf Cycle",
                    "options": {
                        "evergreen": "Evergreen",
                        "deciduous": "Deciduous",
                        "semi_evergreen": "Semi-Evergreen",
                        "semi_deciduous": "Semi-Deciduous",
                        "mixed": "Mixed"
                    }
                },
                "leaf_type_singular": {
                    "label": "Leaf Type",
                    "options": {
                        "broadleaved": "Broadleaved",
                        "needleleaved": "Needleleaved",
                        "leafless": "Leafless"
                    }
                },
                "leaf_type": {
                    "label": "Leaf Type",
                    "options": {
                        "broadleaved": "Broadleaved",
                        "needleleaved": "Needleleaved",
                        "mixed": "Mixed",
                        "leafless": "Leafless"
                    }
                },
                "leisure": {
                    "label": "Type"
                },
                "length": {
                    "label": "Length (Meters)"
                },
                "level": {
                    "label": "Level"
                },
                "levels": {
                    "label": "Levels",
                    "placeholder": "2, 4, 6..."
                },
                "lit": {
                    "label": "Lit"
                },
                "location": {
                    "label": "Location"
                },
                "man_made": {
                    "label": "Type"
                },
                "manhole": {
                    "label": "Type"
                },
                "map_size": {
                    "label": "Coverage"
                },
                "map_type": {
                    "label": "Type"
                },
                "maxheight": {
                    "label": "Max Height",
                    "placeholder": "4, 4.5, 5, 14'0\", 14'6\", 15'0\""
                },
                "maxspeed": {
                    "label": "Speed Limit",
                    "placeholder": "40, 50, 60..."
                },
                "maxstay": {
                    "label": "Max Stay"
                },
                "maxweight": {
                    "label": "Max Weight"
                },
                "memorial": {
                    "label": "Type"
                },
                "milestone_position": {
                    "label": "Milestone Position",
                    "placeholder": "Distance to one decimal (123.4)"
                },
                "monitoring_multi": {
                    "label": "Monitoring"
                },
                "mtb/scale": {
                    "label": "Mountain Biking Difficulty",
                    "placeholder": "0, 1, 2, 3...",
                    "options": {
                        "0": "0: Solid gravel/packed earth, no obstacles, wide curves",
                        "1": "1: Some loose surface, small obstacles, wide curves",
                        "2": "2: Much loose surface, large obstacles, easy hairpins",
                        "3": "3: Slippery surface, large obstacles, tight hairpins",
                        "4": "4: Loose surface or boulders, dangerous hairpins",
                        "5": "5: Maximum difficulty, boulder fields, landslides",
                        "6": "6: Not rideable except by the very best mountain bikers"
                    }
                },
                "mtb/scale/imba": {
                    "label": "IMBA Trail Difficulty",
                    "placeholder": "Easy, Medium, Difficult...",
                    "options": {
                        "0": "Easiest (white circle)",
                        "1": "Easy (green circle)",
                        "2": "Medium (blue square)",
                        "3": "Difficult (black diamond)",
                        "4": "Extremely Difficult (double black diamond)"
                    }
                },
                "mtb/scale/uphill": {
                    "label": "Mountain Biking Uphill Difficulty",
                    "placeholder": "0, 1, 2, 3...",
                    "options": {
                        "0": "0: Avg. incline <10%, gravel/packed earth, no obstacles",
                        "1": "1: Avg. incline <15%, gravel/packed earth, few small objects",
                        "2": "2: Avg. incline <20%, stable surface, fistsize rocks/roots",
                        "3": "3: Avg. incline <25%, variable surface, fistsize rocks/branches",
                        "4": "4: Avg. incline <30%, poor condition, big rocks/branches",
                        "5": "5: Very steep, bike generally needs to be pushed or carried"
                    }
                },
                "name": {
                    "label": "Name",
                    "placeholder": "Common name (if any)"
                },
                "natural": {
                    "label": "Natural"
                },
                "network_bicycle": {
                    "label": "Network Type",
                    "placeholder": "Local, Regional, National, International",
                    "options": {
                        "lcn": "Local",
                        "rcn": "Regional",
                        "ncn": "National",
                        "icn": "International"
                    }
                },
                "network_foot": {
                    "label": "Network Type",
                    "placeholder": "Local, Regional, National, International",
                    "options": {
                        "lwn": "Local",
                        "rwn": "Regional",
                        "nwn": "National",
                        "iwn": "International"
                    }
                },
                "network_horse": {
                    "label": "Network Type",
                    "placeholder": "Local, Regional, National, International",
                    "options": {
                        "lhn": "Local",
                        "rhn": "Regional",
                        "nhn": "National",
                        "ihn": "International"
                    }
                },
                "network_road": {
                    "label": "Network"
                },
                "network": {
                    "label": "Network"
                },
                "note": {
                    "label": "Note"
                },
                "office": {
                    "label": "Type"
                },
                "oneway_yes": {
                    "label": "One Way",
                    "options": {
                        "undefined": "Assumed to be Yes",
                        "yes": "Yes",
                        "no": "No"
                    }
                },
                "oneway": {
                    "label": "One Way",
                    "options": {
                        "undefined": "Assumed to be No",
                        "yes": "Yes",
                        "no": "No"
                    }
                },
                "opening_hours": {
                    "label": "Hours"
                },
                "operator": {
                    "label": "Operator"
                },
                "outdoor_seating": {
                    "label": "Outdoor Seating"
                },
                "par": {
                    "label": "Par",
                    "placeholder": "3, 4, 5..."
                },
                "parallel_direction": {
                    "label": "Direction",
                    "options": {
                        "forward": "Forward",
                        "backward": "Backward"
                    }
                },
                "park_ride": {
                    "label": "Park and Ride"
                },
                "parking": {
                    "label": "Type",
                    "options": {
                        "surface": "Surface",
                        "multi-storey": "Multilevel",
                        "underground": "Underground",
                        "sheds": "Sheds",
                        "carports": "Carports",
                        "garage_boxes": "Garage Boxes",
                        "lane": "Roadside Lane"
                    }
                },
                "payment_multi": {
                    "label": "Payment Types"
                },
                "phases": {
                    "label": "Phases",
                    "placeholder": "1, 2, 3..."
                },
                "phone": {
                    "label": "Phone",
                    "placeholder": "+31 42 123 4567"
                },
                "piste/difficulty": {
                    "label": "Difficulty",
                    "placeholder": "Easy, Intermediate, Advanced...",
                    "options": {
                        "novice": "Novice (instructional)",
                        "easy": "Easy (green circle)",
                        "intermediate": "Intermediate (blue square)",
                        "advanced": "Advanced (black diamond)",
                        "expert": "Expert (double black diamond)",
                        "freeride": "Freeride (off-piste)",
                        "extreme": "Extreme (climbing equipment required)"
                    }
                },
                "piste/grooming": {
                    "label": "Grooming",
                    "options": {
                        "classic": "Classic",
                        "mogul": "Mogul",
                        "backcountry": "Backcountry",
                        "classic+skating": "Classic and Skating",
                        "scooter": "Scooter/Snowmobile",
                        "skating": "Skating"
                    }
                },
                "piste/type": {
                    "label": "Type",
                    "options": {
                        "downhill": "Downhill",
                        "nordic": "Nordic",
                        "skitour": "Skitour",
                        "sled": "Sled",
                        "hike": "Hike",
                        "sleigh": "Sleigh",
                        "ice_skate": "Ice Skate",
                        "snow_park": "Snow Park",
                        "playground": "Playground"
                    }
                },
                "place": {
                    "label": "Type"
                },
                "plant": {
                    "label": "Plant"
                },
                "plant/output/electricity": {
                    "label": "Power Output",
                    "placeholder": "500 MW, 1000 MW, 2000 MW..."
                },
                "playground/baby": {
                    "label": "Baby Seat"
                },
                "playground/max_age": {
                    "label": "Maximum Age"
                },
                "playground/min_age": {
                    "label": "Minimum Age"
                },
                "population": {
                    "label": "Population"
                },
                "power_supply": {
                    "label": "Power Supply"
                },
                "power": {
                    "label": "Type"
                },
                "produce": {
                    "label": "Produce"
                },
                "product": {
                    "label": "Products"
                },
                "railway": {
                    "label": "Type"
                },
                "rating": {
                    "label": "Power Rating"
                },
                "recycling_accepts": {
                    "label": "Accepts"
                },
                "ref_aeroway_gate": {
                    "label": "Gate Number"
                },
                "ref_golf_hole": {
                    "label": "Hole Number",
                    "placeholder": "1-18"
                },
                "ref_highway_junction": {
                    "label": "Junction Number"
                },
                "ref_platform": {
                    "label": "Platform Number"
                },
                "ref_road_number": {
                    "label": "Road Number"
                },
                "ref_route": {
                    "label": "Route Number"
                },
                "ref_runway": {
                    "label": "Runway Number",
                    "placeholder": "e.g. 01L/19R"
                },
                "ref_stop_position": {
                    "label": "Stop Number"
                },
                "ref_taxiway": {
                    "label": "Taxiway Name",
                    "placeholder": "e.g. A5"
                },
                "ref": {
                    "label": "Reference Code"
                },
                "relation": {
                    "label": "Type"
                },
                "religion": {
                    "label": "Religion"
                },
                "restriction": {
                    "label": "Type"
                },
                "restrictions": {
                    "label": "Turn Restrictions"
                },
                "rooms": {
                    "label": "Rooms"
                },
                "route_master": {
                    "label": "Type"
                },
                "route": {
                    "label": "Type"
                },
                "sac_scale": {
                    "label": "Hiking Difficulty",
                    "placeholder": "Mountain Hiking, Alpine Hiking...",
                    "options": {
                        "hiking": "T1: Hiking",
                        "mountain_hiking": "T2: Mountain Hiking",
                        "demanding_mountain_hiking": "T3: Demanding Mountain Hiking",
                        "alpine_hiking": "T4: Alpine Hiking",
                        "demanding_alpine_hiking": "T5: Demanding Alpine Hiking",
                        "difficult_alpine_hiking": "T6: Difficult Alpine Hiking"
                    }
                },
                "sanitary_dump_station": {
                    "label": "Toilet Disposal"
                },
                "seasonal": {
                    "label": "Seasonal"
                },
                "second_hand": {
                    "label": "Sells Used",
                    "placeholder": "Yes, No, Only",
                    "options": {
                        "yes": "Yes",
                        "no": "No",
                        "only": "Only"
                    }
                },
                "service_rail": {
                    "label": "Service Type",
                    "options": {
                        "spur": "Spur",
                        "yard": "Yard",
                        "siding": "Siding",
                        "crossover": "Crossover"
                    }
                },
                "service_times": {
                    "label": "Service Times"
                },
                "service": {
                    "label": "Type"
                },
                "service/bicycle": {
                    "label": "Services"
                },
                "service/vehicle": {
                    "label": "Services"
                },
                "shelter_type": {
                    "label": "Type"
                },
                "shelter": {
                    "label": "Shelter"
                },
                "shop": {
                    "label": "Type"
                },
                "site": {
                    "label": "Type"
                },
                "smoking": {
                    "label": "Smoking",
                    "placeholder": "No, Separated, Yes...",
                    "options": {
                        "no": "No smoking anywhere",
                        "separated": "In smoking areas, not physically isolated",
                        "isolated": "In smoking areas, physically isolated",
                        "outside": "Allowed outside",
                        "yes": "Allowed everywhere",
                        "dedicated": "Dedicated to smokers (e.g. smokers' club)"
                    }
                },
                "smoothness": {
                    "label": "Smoothness",
                    "placeholder": "Thin Rollers, Wheels, Off-Road...",
                    "options": {
                        "excellent": "Thin Rollers: rollerblade, skateboard",
                        "good": "Thin Wheels: racing bike",
                        "intermediate": "Wheels: city bike, wheelchair, scooter",
                        "bad": "Robust Wheels: trekking bike, car, rickshaw",
                        "very_bad": "High Clearance: light duty off-road vehicle",
                        "horrible": "Off-Road: heavy duty off-road vehicle",
                        "very_horrible": "Specialized off-road: tractor, ATV",
                        "impassable": "Impassable / No wheeled vehicle"
                    }
                },
                "social_facility_for": {
                    "label": "People Served"
                },
                "social_facility": {
                    "label": "Type"
                },
                "source": {
                    "label": "Sources"
                },
                "sport_ice": {
                    "label": "Sports"
                },
                "sport_racing_motor": {
                    "label": "Sports"
                },
                "sport_racing_nonmotor": {
                    "label": "Sports"
                },
                "sport": {
                    "label": "Sports"
                },
                "stars": {
                    "label": "Stars"
                },
                "start_date": {
                    "label": "Start Date"
                },
                "step_count": {
                    "label": "Number of Steps"
                },
                "stop": {
                    "label": "Stop Type",
                    "options": {
                        "all": "All Ways",
                        "minor": "Minor Road"
                    }
                },
                "structure_waterway": {
                    "label": "Structure",
                    "placeholder": "Unknown",
                    "options": {
                        "tunnel": "Tunnel"
                    }
                },
                "structure": {
                    "label": "Structure",
                    "placeholder": "Unknown",
                    "options": {
                        "bridge": "Bridge",
                        "tunnel": "Tunnel",
                        "embankment": "Embankment",
                        "cutting": "Cutting",
                        "ford": "Ford"
                    }
                },
                "studio": {
                    "label": "Type"
                },
                "substance": {
                    "label": "Substance"
                },
                "substation": {
                    "label": "Type"
                },
                "supervised": {
                    "label": "Supervised"
                },
                "support": {
                    "label": "Support"
                },
                "surface": {
                    "label": "Surface"
                },
                "surveillance": {
                    "label": "Surveillance Kind"
                },
                "surveillance/type": {
                    "label": "Surveillance Type",
                    "options": {
                        "camera": "Camera",
                        "guard": "Guard",
                        "ALPR": "Automatic License Plate Reader"
                    }
                },
                "surveillance/zone": {
                    "label": "Surveillance Zone"
                },
                "switch": {
                    "label": "Type",
                    "options": {
                        "mechanical": "Mechanical",
                        "circuit_breaker": "Circuit Breaker",
                        "disconnector": "Disconnector",
                        "earthing": "Earthing"
                    }
                },
                "tactile_paving": {
                    "label": "Tactile Paving"
                },
                "takeaway": {
                    "label": "Takeaway",
                    "placeholder": "Yes, No, Takeaway Only...",
                    "options": {
                        "yes": "Yes",
                        "no": "No",
                        "only": "Takeaway Only"
                    }
                },
                "toilets/disposal": {
                    "label": "Disposal",
                    "options": {
                        "flush": "Flush",
                        "pitlatrine": "Pit/Latrine",
                        "chemical": "Chemical",
                        "bucket": "Bucket"
                    }
                },
                "toll": {
                    "label": "Toll"
                },
                "tomb": {
                    "label": "Type"
                },
                "tourism_attraction": {
                    "label": "Tourism"
                },
                "tourism": {
                    "label": "Type"
                },
                "tower/construction": {
                    "label": "Construction",
                    "placeholder": "Guyed, Lattice, Concealed, ..."
                },
                "tower/type": {
                    "label": "Type"
                },
                "tracktype": {
                    "label": "Track Type",
                    "placeholder": "Solid, Mostly Solid, Soft...",
                    "options": {
                        "grade1": "Solid: paved or heavily compacted hardcore surface",
                        "grade2": "Mostly Solid: gravel/rock with some soft material mixed in",
                        "grade3": "Even mixture of hard and soft materials",
                        "grade4": "Mostly Soft: soil/sand/grass with some hard material mixed in",
                        "grade5": "Soft: soil/sand/grass"
                    }
                },
                "trade": {
                    "label": "Type"
                },
                "traffic_calming": {
                    "label": "Type"
                },
                "traffic_signals": {
                    "label": "Type"
                },
                "trail_visibility": {
                    "label": "Trail Visibility",
                    "placeholder": "Excellent, Good, Bad...",
                    "options": {
                        "excellent": "Excellent: unambiguous path or markers everywhere",
                        "good": "Good: markers visible, sometimes require searching",
                        "intermediate": "Intermediate: few markers, path mostly visible",
                        "bad": "Bad: no markers, path sometimes invisible/pathless",
                        "horrible": "Horrible: often pathless, some orientation skills required",
                        "no": "No: pathless, excellent orientation skills required"
                    }
                },
                "transformer": {
                    "label": "Type",
                    "options": {
                        "distribution": "Distribution",
                        "generator": "Generator",
                        "converter": "Converter",
                        "traction": "Traction",
                        "auto": "Autotransformer",
                        "phase_angle_regulator": "Phase Angle Regulator",
                        "auxiliary": "Auxiliary",
                        "yes": "Unknown"
                    }
                },
                "trees": {
                    "label": "Trees"
                },
                "tunnel": {
                    "label": "Type",
                    "placeholder": "Default"
                },
                "vending": {
                    "label": "Type of Goods"
                },
                "visibility": {
                    "label": "Visibility",
                    "options": {
                        "house": "Up to 5m (16ft)",
                        "street": "5 to 20m (16 to 65ft)",
                        "area": "Over 20m (65ft)"
                    }
                },
                "volcano/status": {
                    "label": "Volcano Status",
                    "options": {
                        "active": "Active",
                        "dormant": "Dormant",
                        "extinct": "Extinct"
                    }
                },
                "volcano/type": {
                    "label": "Volcano Type",
                    "options": {
                        "stratovolcano": "Stratovolcano",
                        "shield": "Shield",
                        "scoria": "Scoria"
                    }
                },
                "voltage": {
                    "label": "Voltage"
                },
                "voltage/primary": {
                    "label": "Primary Voltage"
                },
                "voltage/secondary": {
                    "label": "Secondary Voltage"
                },
                "voltage/tertiary": {
                    "label": "Tertiary Voltage"
                },
                "wall": {
                    "label": "Type"
                },
                "water_point": {
                    "label": "Water Point"
                },
                "water": {
                    "label": "Type"
                },
                "waterway": {
                    "label": "Type"
                },
                "website": {
                    "label": "Website",
                    "placeholder": "http://example.com/"
                },
                "wetland": {
                    "label": "Type"
                },
                "wheelchair": {
                    "label": "Wheelchair Access"
                },
                "width": {
                    "label": "Width (Meters)"
                },
                "wikipedia": {
                    "label": "Wikipedia"
                },
                "windings": {
                    "label": "Windings",
                    "placeholder": "1, 2, 3..."
                },
                "windings/configuration": {
                    "label": "Windings Configuration",
                    "options": {
                        "star": "Star / Wye",
                        "delta": "Delta",
                        "open-delta": "Open Delta",
                        "zigzag": "Zig Zag",
                        "open": "Open",
                        "scott": "Scott",
                        "leblanc": "Leblanc"
                    }
                }
            },
            "presets": {
                "aerialway": {
                    "name": "Aerialway",
                    "terms": "ski lift,funifor,funitel"
                },
                "aeroway": {
                    "name": "Aeroway",
                    "terms": ""
                },
                "amenity": {
                    "name": "Amenity",
                    "terms": ""
                },
                "highway": {
                    "name": "Highway",
                    "terms": ""
                },
                "place": {
                    "name": "Place",
                    "terms": ""
                },
                "power": {
                    "name": "Power",
                    "terms": ""
                },
                "railway": {
                    "name": "Railway",
                    "terms": ""
                },
                "roundabout": {
                    "name": "Roundabout",
                    "terms": ""
                },
                "waterway": {
                    "name": "Waterway",
                    "terms": ""
                },
                "address": {
                    "name": "Address",
                    "terms": ""
                },
                "advertising/billboard": {
                    "name": "Billboard",
                    "terms": ""
                },
                "aerialway/station": {
                    "name": "Aerialway Station",
                    "terms": ""
                },
                "aerialway/cable_car": {
                    "name": "Cable Car",
                    "terms": "tramway,ropeway"
                },
                "aerialway/chair_lift": {
                    "name": "Chair Lift",
                    "terms": ""
                },
                "aerialway/drag_lift": {
                    "name": "Drag Lift",
                    "terms": ""
                },
                "aerialway/gondola": {
                    "name": "Gondola",
                    "terms": ""
                },
                "aerialway/goods": {
                    "name": "Goods Aerialway",
                    "terms": ""
                },
                "aerialway/magic_carpet": {
                    "name": "Magic Carpet Lift",
                    "terms": ""
                },
                "aerialway/mixed_lift": {
                    "name": "Mixed Lift",
                    "terms": ""
                },
                "aerialway/platter": {
                    "name": "Platter Lift",
                    "terms": "button lift,poma lift"
                },
                "aerialway/pylon": {
                    "name": "Aerialway Pylon",
                    "terms": ""
                },
                "aerialway/rope_tow": {
                    "name": "Rope Tow Lift",
                    "terms": "handle tow,bugel lift"
                },
                "aerialway/t-bar": {
                    "name": "T-bar Lift",
                    "terms": "tbar"
                },
                "aeroway/aerodrome": {
                    "name": "Airport",
                    "terms": "airplane,airport,aerodrome"
                },
                "aeroway/apron": {
                    "name": "Apron",
                    "terms": "ramp"
                },
                "aeroway/gate": {
                    "name": "Airport Gate",
                    "terms": ""
                },
                "aeroway/hangar": {
                    "name": "Hangar",
                    "terms": ""
                },
                "aeroway/helipad": {
                    "name": "Helipad",
                    "terms": "helicopter,helipad,heliport"
                },
                "aeroway/runway": {
                    "name": "Runway",
                    "terms": "landing strip"
                },
                "aeroway/taxiway": {
                    "name": "Taxiway",
                    "terms": ""
                },
                "aeroway/terminal": {
                    "name": "Airport Terminal",
                    "terms": "airport,aerodrome"
                },
                "amenity/bus_station": {
                    "name": "Bus Station / Terminal",
                    "terms": ""
                },
                "amenity/coworking_space": {
                    "name": "Coworking Space",
                    "terms": ""
                },
                "amenity/ferry_terminal": {
                    "name": "Ferry Station / Terminal",
                    "terms": ""
                },
                "amenity/nursing_home": {
                    "name": "Nursing Home",
                    "terms": ""
                },
                "amenity/register_office": {
                    "name": "Register Office",
                    "terms": ""
                },
                "amenity/scrapyard": {
                    "name": "Scrap Yard",
                    "terms": ""
                },
                "amenity/swimming_pool": {
                    "name": "Swimming Pool",
                    "terms": ""
                },
                "amenity/animal_boarding": {
                    "name": "Animal Boarding Facility",
                    "terms": "boarding,cat,dog,horse,kitten,pet boarding,pet care,pet hotel,puppy,reptile"
                },
                "amenity/animal_breeding": {
                    "name": "Animal Breeding Facility",
                    "terms": "breeding,bull,cat,cow,dog,horse,husbandry,kitten,livestock,pet breeding,puppy,reptile"
                },
                "amenity/animal_shelter": {
                    "name": "Animal Shelter",
                    "terms": "adoption,aspca,cat,dog,horse,kitten,pet care,pet rescue,puppy,raptor,reptile,rescue,spca"
                },
                "amenity/arts_centre": {
                    "name": "Arts Center",
                    "terms": ""
                },
                "amenity/atm": {
                    "name": "ATM",
                    "terms": "money,cash,machine"
                },
                "amenity/bank": {
                    "name": "Bank",
                    "terms": "credit union,check,deposit,fund,investment,repository,reserve,safe,savings,stock,treasury,trust,vault"
                },
                "amenity/bar": {
                    "name": "Bar",
                    "terms": "dive,beer,bier,booze"
                },
                "amenity/bbq": {
                    "name": "Barbecue/Grill",
                    "terms": "bbq,grill"
                },
                "amenity/bench": {
                    "name": "Bench",
                    "terms": "seat"
                },
                "amenity/bicycle_parking": {
                    "name": "Bicycle Parking",
                    "terms": "bike"
                },
                "amenity/bicycle_rental": {
                    "name": "Bicycle Rental",
                    "terms": "bike"
                },
                "amenity/bicycle_repair_station": {
                    "name": "Bicycle Repair Tool Stand",
                    "terms": "bike,repair,chain,pump"
                },
                "amenity/biergarten": {
                    "name": "Beer Garden",
                    "terms": "beer,bier,booze"
                },
                "amenity/boat_rental": {
                    "name": "Boat Rental",
                    "terms": ""
                },
                "amenity/bureau_de_change": {
                    "name": "Currency Exchange",
                    "terms": "bureau de change,money changer"
                },
                "amenity/cafe": {
                    "name": "Cafe",
                    "terms": "bistro,coffee,tea"
                },
                "amenity/car_rental": {
                    "name": "Car Rental",
                    "terms": ""
                },
                "amenity/car_sharing": {
                    "name": "Car Sharing",
                    "terms": ""
                },
                "amenity/car_wash": {
                    "name": "Car Wash",
                    "terms": ""
                },
                "amenity/casino": {
                    "name": "Casino",
                    "terms": "gambling,roulette,craps,poker,blackjack"
                },
                "amenity/charging_station": {
                    "name": "Charging Station",
                    "terms": "EV,Electric Vehicle,Supercharger"
                },
                "amenity/childcare": {
                    "name": "Nursery/Childcare",
                    "terms": "daycare,orphanage,playgroup"
                },
                "amenity/cinema": {
                    "name": "Cinema",
                    "terms": "drive-in,film,flick,movie,theater,picture,show,screen"
                },
                "amenity/clinic": {
                    "name": "Clinic",
                    "terms": "medical,urgentcare"
                },
                "amenity/clinic/abortion": {
                    "name": "Abortion Clinic",
                    "terms": ""
                },
                "amenity/clinic/fertility": {
                    "name": "Fertility Clinic",
                    "terms": "egg,fertility,reproductive,sperm,ovulation"
                },
                "amenity/clock": {
                    "name": "Clock",
                    "terms": ""
                },
                "amenity/college": {
                    "name": "College Grounds",
                    "terms": "university"
                },
                "amenity/community_centre": {
                    "name": "Community Center",
                    "terms": "event,hall"
                },
                "amenity/compressed_air": {
                    "name": "Compressed Air",
                    "terms": ""
                },
                "amenity/courthouse": {
                    "name": "Courthouse",
                    "terms": ""
                },
                "amenity/crematorium": {
                    "name": "Crematorium",
                    "terms": "cemetery,funeral"
                },
                "amenity/dentist": {
                    "name": "Dentist",
                    "terms": "tooth,teeth"
                },
                "amenity/doctors": {
                    "name": "Doctor",
                    "terms": "medic*,physician"
                },
                "amenity/dojo": {
                    "name": "Dojo / Martial Arts Academy",
                    "terms": "martial arts,dojang"
                },
                "amenity/drinking_water": {
                    "name": "Drinking Water",
                    "terms": "fountain,potable"
                },
                "amenity/driving_school": {
                    "name": "Driving School",
                    "terms": ""
                },
                "amenity/embassy": {
                    "name": "Embassy",
                    "terms": ""
                },
                "amenity/fast_food": {
                    "name": "Fast Food",
                    "terms": "restaurant,takeaway"
                },
                "amenity/fire_station": {
                    "name": "Fire Station",
                    "terms": ""
                },
                "amenity/food_court": {
                    "name": "Food Court",
                    "terms": "fast food,restaurant,food"
                },
                "amenity/fountain": {
                    "name": "Fountain",
                    "terms": ""
                },
                "amenity/fuel": {
                    "name": "Gas Station",
                    "terms": "petrol,fuel,gasoline,propane,diesel,lng,cng,biodiesel"
                },
                "amenity/grave_yard": {
                    "name": "Graveyard",
                    "terms": ""
                },
                "amenity/grit_bin": {
                    "name": "Grit Bin",
                    "terms": "salt,sand"
                },
                "amenity/hospital": {
                    "name": "Hospital Grounds",
                    "terms": "clinic,doctor,emergency room,health,infirmary,institution,sanatorium,sanitarium,sick,surgery,ward"
                },
                "amenity/hunting_stand": {
                    "name": "Hunting Stand",
                    "terms": "game,gun,lookout,rifle,shoot*,wild,watch"
                },
                "amenity/ice_cream": {
                    "name": "Ice Cream Shop",
                    "terms": "gelato,sorbet,sherbet,frozen,yogurt"
                },
                "amenity/internet_cafe": {
                    "name": "Internet Cafe",
                    "terms": "cybercafe,taxiphone,teleboutique,coffee,cafe,net,lanhouse"
                },
                "amenity/kindergarten": {
                    "name": "Preschool/Kindergarten Grounds",
                    "terms": "kindergarden,pre-school"
                },
                "amenity/library": {
                    "name": "Library",
                    "terms": "book"
                },
                "amenity/marketplace": {
                    "name": "Marketplace",
                    "terms": ""
                },
                "amenity/motorcycle_parking": {
                    "name": "Motorcycle Parking",
                    "terms": ""
                },
                "amenity/music_school": {
                    "name": "Music School",
                    "terms": "school of music"
                },
                "amenity/nightclub": {
                    "name": "Nightclub",
                    "terms": "disco*,night club,dancing,dance club"
                },
                "amenity/parking_entrance": {
                    "name": "Parking Garage Entrance/Exit",
                    "terms": ""
                },
                "amenity/parking_space": {
                    "name": "Parking Space",
                    "terms": ""
                },
                "amenity/parking": {
                    "name": "Car Parking",
                    "terms": ""
                },
                "amenity/pavilion": {
                    "name": "Pavilion",
                    "terms": ""
                },
                "amenity/pharmacy": {
                    "name": "Pharmacy",
                    "terms": "drug*,med*,prescription"
                },
                "amenity/place_of_worship": {
                    "name": "Place of Worship",
                    "terms": "abbey,basilica,bethel,cathedral,chancel,chantry,chapel,church,fold,house of God,house of prayer,house of worship,minster,mission,mosque,oratory,parish,sacellum,sanctuary,shrine,synagogue,tabernacle,temple"
                },
                "amenity/place_of_worship/buddhist": {
                    "name": "Buddhist Temple",
                    "terms": "stupa,vihara,monastery,temple,pagoda,zendo,dojo"
                },
                "amenity/place_of_worship/christian": {
                    "name": "Church",
                    "terms": "christian,abbey,basilica,bethel,cathedral,chancel,chantry,chapel,fold,house of God,house of prayer,house of worship,minster,mission,oratory,parish,sacellum,sanctuary,shrine,tabernacle,temple"
                },
                "amenity/place_of_worship/hindu": {
                    "name": "Hindu Temple",
                    "terms": "garbhargriha,mandu,puja,shrine,temple"
                },
                "amenity/place_of_worship/jewish": {
                    "name": "Synagogue",
                    "terms": "jewish"
                },
                "amenity/place_of_worship/muslim": {
                    "name": "Mosque",
                    "terms": "muslim"
                },
                "amenity/place_of_worship/shinto": {
                    "name": "Shinto Shrine",
                    "terms": "kami,torii"
                },
                "amenity/place_of_worship/sikh": {
                    "name": "Sikh Temple",
                    "terms": "gurudwara,temple"
                },
                "amenity/place_of_worship/taoist": {
                    "name": "Taoist Temple",
                    "terms": "daoist,monastery,temple"
                },
                "amenity/planetarium": {
                    "name": "Planetarium",
                    "terms": "museum,astronomy,observatory"
                },
                "amenity/police": {
                    "name": "Police",
                    "terms": "badge,constable,constabulary,cop,detective,fed,law,enforcement,officer,patrol"
                },
                "amenity/post_box": {
                    "name": "Mailbox",
                    "terms": "letter,post"
                },
                "amenity/post_office": {
                    "name": "Post Office",
                    "terms": "letter,mail"
                },
                "amenity/prison": {
                    "name": "Prison Grounds",
                    "terms": "cell,jail"
                },
                "amenity/pub": {
                    "name": "Pub",
                    "terms": "alcohol,drink,dive,beer,bier,booze"
                },
                "amenity/public_bath": {
                    "name": "Public Bath",
                    "terms": "onsen,foot bath,hot springs"
                },
                "amenity/public_bookcase": {
                    "name": "Public Bookcase",
                    "terms": "library,bookcrossing"
                },
                "amenity/ranger_station": {
                    "name": "Ranger Station",
                    "terms": "visitor center,visitor centre,permit center,permit centre,backcountry office,warden office,warden center"
                },
                "amenity/recycling_centre": {
                    "name": "Recycling Center",
                    "terms": "bottle,can,dump,glass,garbage,rubbish,scrap,trash"
                },
                "amenity/recycling": {
                    "name": "Recycling Container",
                    "terms": "bin,can,bottle,glass,garbage,rubbish,scrap,trash"
                },
                "amenity/restaurant": {
                    "name": "Restaurant",
                    "terms": "bar,breakfast,cafe,café,canteen,coffee,dine,dining,dinner,drive-in,eat,grill,lunch,table"
                },
                "amenity/sanitary_dump_station": {
                    "name": "RV Toilet Disposal",
                    "terms": "Motor Home,Camper,Sanitary,Dump Station,Elsan,CDP,CTDP,Chemical Toilet"
                },
                "amenity/school": {
                    "name": "School Grounds",
                    "terms": "academy,elementary school,middle school,high school"
                },
                "amenity/shelter": {
                    "name": "Shelter",
                    "terms": "lean-to,gazebo,picnic"
                },
                "amenity/shower": {
                    "name": "Shower",
                    "terms": "rain closet"
                },
                "amenity/social_facility": {
                    "name": "Social Facility",
                    "terms": ""
                },
                "amenity/social_facility/food_bank": {
                    "name": "Food Bank",
                    "terms": ""
                },
                "amenity/social_facility/group_home": {
                    "name": "Elderly Group Home",
                    "terms": "old,senior,living,care home,assisted living"
                },
                "amenity/social_facility/homeless_shelter": {
                    "name": "Homeless Shelter",
                    "terms": "houseless,unhoused,displaced"
                },
                "amenity/social_facility/nursing_home": {
                    "name": "Nursing Home",
                    "terms": "elderly,living,nursing,old,senior,assisted living"
                },
                "amenity/studio": {
                    "name": "Studio",
                    "terms": "recording,radio,television"
                },
                "amenity/taxi": {
                    "name": "Taxi Stand",
                    "terms": "cab"
                },
                "amenity/telephone": {
                    "name": "Telephone",
                    "terms": "phone"
                },
                "amenity/theatre": {
                    "name": "Theater",
                    "terms": "theatre,performance,play,musical"
                },
                "amenity/toilets": {
                    "name": "Toilets",
                    "terms": "bathroom,restroom,outhouse,privy,head,lavatory,latrine,water closet,WC,W.C."
                },
                "amenity/townhall": {
                    "name": "Town Hall",
                    "terms": "village,city,government,courthouse,municipal"
                },
                "amenity/university": {
                    "name": "University Grounds",
                    "terms": "college"
                },
                "amenity/vending_machine": {
                    "name": "Vending Machine",
                    "terms": ""
                },
                "amenity/vending_machine/news_papers": {
                    "name": "Newspaper Vending Machine",
                    "terms": "newspaper"
                },
                "amenity/vending_machine/cigarettes": {
                    "name": "Cigarette Vending Machine",
                    "terms": "cigarette"
                },
                "amenity/vending_machine/condoms": {
                    "name": "Condom Vending Machine",
                    "terms": "condom"
                },
                "amenity/vending_machine/drinks": {
                    "name": "Drink Vending Machine",
                    "terms": "drink,soda,beverage,juice,pop"
                },
                "amenity/vending_machine/excrement_bags": {
                    "name": "Excrement Bag Vending Machine",
                    "terms": "excrement bags,poop,dog,animal"
                },
                "amenity/vending_machine/feminine_hygiene": {
                    "name": "Feminine Hygiene Vending Machine",
                    "terms": "condom,tampon,pad,woman,women,menstrual hygiene products,personal care"
                },
                "amenity/vending_machine/newspapers": {
                    "name": "Newspaper Vending Machine",
                    "terms": "newspaper"
                },
                "amenity/vending_machine/parcel_pickup_dropoff": {
                    "name": "Parcel Pickup/Dropoff Vending Machine",
                    "terms": "parcel,mail,pickup"
                },
                "amenity/vending_machine/parking_tickets": {
                    "name": "Parking Ticket Vending Machine",
                    "terms": "parking,ticket"
                },
                "amenity/vending_machine/public_transport_tickets": {
                    "name": "Transit Ticket Vending Machine",
                    "terms": "bus,train,ferry,rail,ticket,transportation"
                },
                "amenity/vending_machine/sweets": {
                    "name": "Snack Vending Machine",
                    "terms": "candy,gum,chip,pretzel,cookie,cracker"
                },
                "amenity/veterinary": {
                    "name": "Veterinary",
                    "terms": "pet clinic,veterinarian,animal hospital,pet doctor"
                },
                "amenity/waste_basket": {
                    "name": "Waste Basket",
                    "terms": "bin,garbage,rubbish,litter,trash"
                },
                "amenity/waste_disposal": {
                    "name": "Garbage Dumpster",
                    "terms": "garbage,rubbish,litter,trash"
                },
                "amenity/waste_transfer_station": {
                    "name": "Waste Transfer Station",
                    "terms": "dump,garbage,recycling,rubbish,scrap,trash"
                },
                "amenity/waste/dog_excrement": {
                    "name": "Dog Excrement Bin",
                    "terms": "bin,garbage,rubbish,litter,trash,poo,dog"
                },
                "amenity/water_point": {
                    "name": "RV Drinking Water",
                    "terms": ""
                },
                "amenity/watering_place": {
                    "name": "Animal Watering Place",
                    "terms": ""
                },
                "area": {
                    "name": "Area",
                    "terms": ""
                },
                "area/highway": {
                    "name": "Road Surface",
                    "terms": ""
                },
                "attraction/amusement_ride": {
                    "name": "Amusement Ride",
                    "terms": "theme park,carnival ride"
                },
                "attraction/animal": {
                    "name": "Animal",
                    "terms": "zoo,theme park,animal park,lion,tiger,bear"
                },
                "attraction/big_wheel": {
                    "name": "Big Wheel",
                    "terms": "ferris wheel,theme park,amusement ride"
                },
                "attraction/bumper_car": {
                    "name": "Bumper Car",
                    "terms": "theme park,dodgem cars,autoscooter"
                },
                "attraction/bungee_jumping": {
                    "name": "Bungee Jumping",
                    "terms": "theme park,bungy jumping,jumping platform"
                },
                "attraction/carousel": {
                    "name": "Carousel",
                    "terms": "theme park,roundabout,merry-go-round,galloper,jumper,horseabout,flying horses"
                },
                "attraction/dark_ride": {
                    "name": "Dark Ride",
                    "terms": "theme park,ghost train"
                },
                "attraction/drop_tower": {
                    "name": "Drop Tower",
                    "terms": "theme park,amusement ride,gondola,tower,big drop"
                },
                "attraction/pirate_ship": {
                    "name": "Pirate Ship",
                    "terms": "theme park,carnival ride,amusement ride"
                },
                "attraction/river_rafting": {
                    "name": "River Rafting",
                    "terms": "theme park,aquatic park,water park,rafting simulator,river rafting ride,river rapids ride"
                },
                "attraction/roller_coaster": {
                    "name": "Roller Coaster",
                    "terms": "theme park,amusement ride"
                },
                "attraction/train": {
                    "name": "Tourist Train",
                    "terms": "theme park,rackless train,road train,Tschu-Tschu train,dotto train,park train"
                },
                "attraction/water_slide": {
                    "name": "Water Slide",
                    "terms": "theme park,aquatic park,water park,flumes,water chutes,hydroslides"
                },
                "barrier": {
                    "name": "Barrier",
                    "terms": ""
                },
                "barrier/entrance": {
                    "name": "Entrance",
                    "terms": ""
                },
                "barrier/block": {
                    "name": "Block",
                    "terms": ""
                },
                "barrier/bollard": {
                    "name": "Bollard",
                    "terms": ""
                },
                "barrier/border_control": {
                    "name": "Border Control",
                    "terms": ""
                },
                "barrier/cattle_grid": {
                    "name": "Cattle Grid",
                    "terms": ""
                },
                "barrier/city_wall": {
                    "name": "City Wall",
                    "terms": ""
                },
                "barrier/cycle_barrier": {
                    "name": "Cycle Barrier",
                    "terms": ""
                },
                "barrier/ditch": {
                    "name": "Trench",
                    "terms": ""
                },
                "barrier/fence": {
                    "name": "Fence",
                    "terms": ""
                },
                "barrier/gate": {
                    "name": "Gate",
                    "terms": ""
                },
                "barrier/hedge": {
                    "name": "Hedge",
                    "terms": ""
                },
                "barrier/kissing_gate": {
                    "name": "Kissing Gate",
                    "terms": ""
                },
                "barrier/lift_gate": {
                    "name": "Lift Gate",
                    "terms": ""
                },
                "barrier/retaining_wall": {
                    "name": "Retaining Wall",
                    "terms": ""
                },
                "barrier/stile": {
                    "name": "Stile",
                    "terms": ""
                },
                "barrier/toll_booth": {
                    "name": "Toll Booth",
                    "terms": ""
                },
                "barrier/wall": {
                    "name": "Wall",
                    "terms": ""
                },
                "boundary/administrative": {
                    "name": "Administrative Boundary",
                    "terms": ""
                },
                "building": {
                    "name": "Building",
                    "terms": ""
                },
                "building/bunker": {
                    "name": "Bunker",
                    "terms": ""
                },
                "building/entrance": {
                    "name": "Entrance/Exit",
                    "terms": ""
                },
                "building/train_station": {
                    "name": "Train Station",
                    "terms": ""
                },
                "building/apartments": {
                    "name": "Apartments",
                    "terms": ""
                },
                "building/barn": {
                    "name": "Barn",
                    "terms": ""
                },
                "building/cabin": {
                    "name": "Cabin",
                    "terms": ""
                },
                "building/cathedral": {
                    "name": "Cathedral Building",
                    "terms": ""
                },
                "building/chapel": {
                    "name": "Chapel Building",
                    "terms": ""
                },
                "building/church": {
                    "name": "Church Building",
                    "terms": ""
                },
                "building/college": {
                    "name": "College Building",
                    "terms": "university"
                },
                "building/commercial": {
                    "name": "Commercial Building",
                    "terms": ""
                },
                "building/construction": {
                    "name": "Building Under Construction",
                    "terms": ""
                },
                "building/detached": {
                    "name": "Detached House",
                    "terms": "home,single,family,residence,dwelling"
                },
                "building/dormitory": {
                    "name": "Dormitory",
                    "terms": ""
                },
                "building/garage": {
                    "name": "Garage",
                    "terms": ""
                },
                "building/garages": {
                    "name": "Garages",
                    "terms": ""
                },
                "building/greenhouse": {
                    "name": "Greenhouse",
                    "terms": ""
                },
                "building/hospital": {
                    "name": "Hospital Building",
                    "terms": ""
                },
                "building/hotel": {
                    "name": "Hotel Building",
                    "terms": ""
                },
                "building/house": {
                    "name": "House",
                    "terms": "home,family,residence,dwelling"
                },
                "building/hut": {
                    "name": "Hut",
                    "terms": ""
                },
                "building/industrial": {
                    "name": "Industrial Building",
                    "terms": ""
                },
                "building/kindergarten": {
                    "name": "Preschool/Kindergarten Building",
                    "terms": "kindergarden,pre-school"
                },
                "building/mosque": {
                    "name": "Mosque Building",
                    "terms": ""
                },
                "building/public": {
                    "name": "Public Building",
                    "terms": ""
                },
                "building/residential": {
                    "name": "Residential Building",
                    "terms": ""
                },
                "building/retail": {
                    "name": "Retail Building",
                    "terms": ""
                },
                "building/roof": {
                    "name": "Roof",
                    "terms": ""
                },
                "building/school": {
                    "name": "School Building",
                    "terms": "academy,elementary school,middle school,high school"
                },
                "building/semidetached_house": {
                    "name": "Semi-Detached House",
                    "terms": "home,double,duplex,twin,family,residence,dwelling"
                },
                "building/shed": {
                    "name": "Shed",
                    "terms": ""
                },
                "building/stable": {
                    "name": "Stable",
                    "terms": ""
                },
                "building/static_caravan": {
                    "name": "Static Mobile Home",
                    "terms": ""
                },
                "building/terrace": {
                    "name": "Row Houses",
                    "terms": "home,terrace,brownstone,family,residence,dwelling"
                },
                "building/university": {
                    "name": "University Building",
                    "terms": "college"
                },
                "building/warehouse": {
                    "name": "Warehouse",
                    "terms": ""
                },
                "camp_site/camp_pitch": {
                    "name": "Camp Pitch",
                    "terms": "tent,rv"
                },
                "club": {
                    "name": "Club",
                    "terms": "social"
                },
                "craft": {
                    "name": "Craft",
                    "terms": ""
                },
                "craft/jeweler": {
                    "name": "Jeweler",
                    "terms": ""
                },
                "craft/locksmith": {
                    "name": "Locksmith",
                    "terms": ""
                },
                "craft/optician": {
                    "name": "Optician",
                    "terms": ""
                },
                "craft/tailor": {
                    "name": "Tailor",
                    "terms": "clothes,suit"
                },
                "craft/basket_maker": {
                    "name": "Basket Maker",
                    "terms": ""
                },
                "craft/beekeeper": {
                    "name": "Beekeeper",
                    "terms": ""
                },
                "craft/blacksmith": {
                    "name": "Blacksmith",
                    "terms": ""
                },
                "craft/boatbuilder": {
                    "name": "Boat Builder",
                    "terms": ""
                },
                "craft/bookbinder": {
                    "name": "Bookbinder",
                    "terms": "book repair"
                },
                "craft/brewery": {
                    "name": "Brewery",
                    "terms": "alcohol,beer,beverage,bier,booze,cider"
                },
                "craft/carpenter": {
                    "name": "Carpenter",
                    "terms": "woodworker"
                },
                "craft/carpet_layer": {
                    "name": "Carpet Layer",
                    "terms": ""
                },
                "craft/caterer": {
                    "name": "Caterer",
                    "terms": ""
                },
                "craft/chimney_sweeper": {
                    "name": "Chimney Sweeper",
                    "terms": ""
                },
                "craft/clockmaker": {
                    "name": "Clockmaker",
                    "terms": ""
                },
                "craft/confectionery": {
                    "name": "Candy Maker",
                    "terms": "sweet,candy"
                },
                "craft/distillery": {
                    "name": "Distillery",
                    "terms": "alcohol,beverage,bourbon,booze,brandy,gin,hooch,liquor,mezcal,moonshine,rum,scotch,spirits,still,tequila,vodka,whiskey,whisky"
                },
                "craft/dressmaker": {
                    "name": "Dressmaker",
                    "terms": "seamstress"
                },
                "craft/electrician": {
                    "name": "Electrician",
                    "terms": "power,wire"
                },
                "craft/electronics_repair": {
                    "name": "Electronics Repair Shop",
                    "terms": ""
                },
                "craft/gardener": {
                    "name": "Gardener",
                    "terms": "landscaper,grounds keeper"
                },
                "craft/glaziery": {
                    "name": "Glaziery",
                    "terms": "glass,stained-glass,window"
                },
                "craft/handicraft": {
                    "name": "Handicraft",
                    "terms": ""
                },
                "craft/hvac": {
                    "name": "HVAC",
                    "terms": "heat*,vent*,air conditioning"
                },
                "craft/insulator": {
                    "name": "Insulator",
                    "terms": ""
                },
                "craft/key_cutter": {
                    "name": "Key Cutter",
                    "terms": ""
                },
                "craft/metal_construction": {
                    "name": "Metal Construction",
                    "terms": ""
                },
                "craft/painter": {
                    "name": "Painter",
                    "terms": ""
                },
                "craft/photographer": {
                    "name": "Photographer",
                    "terms": ""
                },
                "craft/photographic_laboratory": {
                    "name": "Photographic Laboratory",
                    "terms": "film"
                },
                "craft/plasterer": {
                    "name": "Plasterer",
                    "terms": ""
                },
                "craft/plumber": {
                    "name": "Plumber",
                    "terms": "pipe"
                },
                "craft/pottery": {
                    "name": "Pottery",
                    "terms": "ceramic"
                },
                "craft/rigger": {
                    "name": "Rigger",
                    "terms": ""
                },
                "craft/roofer": {
                    "name": "Roofer",
                    "terms": ""
                },
                "craft/saddler": {
                    "name": "Saddler",
                    "terms": ""
                },
                "craft/sailmaker": {
                    "name": "Sailmaker",
                    "terms": ""
                },
                "craft/sawmill": {
                    "name": "Sawmill",
                    "terms": "lumber"
                },
                "craft/scaffolder": {
                    "name": "Scaffolder",
                    "terms": ""
                },
                "craft/sculptor": {
                    "name": "Sculptor",
                    "terms": ""
                },
                "craft/shoemaker": {
                    "name": "Shoemaker",
                    "terms": "cobbler"
                },
                "craft/stonemason": {
                    "name": "Stonemason",
                    "terms": "masonry"
                },
                "craft/tiler": {
                    "name": "Tiler",
                    "terms": ""
                },
                "craft/tinsmith": {
                    "name": "Tinsmith",
                    "terms": ""
                },
                "craft/upholsterer": {
                    "name": "Upholsterer",
                    "terms": ""
                },
                "craft/watchmaker": {
                    "name": "Watchmaker",
                    "terms": ""
                },
                "craft/window_construction": {
                    "name": "Window Construction",
                    "terms": "glass"
                },
                "craft/winery": {
                    "name": "Winery",
                    "terms": ""
                },
                "embankment": {
                    "name": "Embankment",
                    "terms": ""
                },
                "emergency/designated": {
                    "name": "Emergency Access Designated",
                    "terms": ""
                },
                "emergency/destination": {
                    "name": "Emergency Access Destination",
                    "terms": ""
                },
                "emergency/no": {
                    "name": "Emergency Access No",
                    "terms": ""
                },
                "emergency/official": {
                    "name": "Emergency Access Official",
                    "terms": ""
                },
                "emergency/private": {
                    "name": "Emergency Access Private",
                    "terms": ""
                },
                "emergency/yes": {
                    "name": "Emergency Access Yes",
                    "terms": ""
                },
                "emergency/ambulance_station": {
                    "name": "Ambulance Station",
                    "terms": "EMS,EMT,rescue"
                },
                "emergency/defibrillator": {
                    "name": "Defibrillator",
                    "terms": "AED"
                },
                "emergency/fire_hydrant": {
                    "name": "Fire Hydrant",
                    "terms": "fire plug"
                },
                "emergency/life_ring": {
                    "name": "Life Ring",
                    "terms": "life buoy,kisby ring,kisbie ring,perry buoy"
                },
                "emergency/phone": {
                    "name": "Emergency Phone",
                    "terms": ""
                },
                "entrance": {
                    "name": "Entrance/Exit",
                    "terms": ""
                },
                "footway/crossing-raised": {
                    "name": "Raised Street Crossing",
                    "terms": "flat top,hump,speed,slow"
                },
                "footway/crossing": {
                    "name": "Street Crossing",
                    "terms": ""
                },
                "footway/crosswalk-raised": {
                    "name": "Raised Pedestrian Crosswalk",
                    "terms": "zebra crossing,flat top,hump,speed,slow"
                },
                "footway/crosswalk": {
                    "name": "Pedestrian Crosswalk",
                    "terms": "zebra crossing"
                },
                "footway/sidewalk": {
                    "name": "Sidewalk",
                    "terms": ""
                },
                "ford": {
                    "name": "Ford",
                    "terms": ""
                },
                "golf/bunker": {
                    "name": "Sand Trap",
                    "terms": "hazard,bunker"
                },
                "golf/fairway": {
                    "name": "Fairway",
                    "terms": ""
                },
                "golf/green": {
                    "name": "Putting Green",
                    "terms": ""
                },
                "golf/hole": {
                    "name": "Golf Hole",
                    "terms": ""
                },
                "golf/lateral_water_hazard_area": {
                    "name": "Lateral Water Hazard",
                    "terms": ""
                },
                "golf/lateral_water_hazard_line": {
                    "name": "Lateral Water Hazard",
                    "terms": ""
                },
                "golf/rough": {
                    "name": "Rough",
                    "terms": ""
                },
                "golf/tee": {
                    "name": "Tee Box",
                    "terms": "teeing ground"
                },
                "golf/water_hazard_area": {
                    "name": "Water Hazard",
                    "terms": ""
                },
                "golf/water_hazard_line": {
                    "name": "Water Hazard",
                    "terms": ""
                },
                "healthcare": {
                    "name": "Healthcare Facility",
                    "terms": "clinic,doctor,disease,health,institution,sick,surgery,wellness"
                },
                "healthcare/alternative": {
                    "name": "Alternative Medicine",
                    "terms": "acupuncture,anthroposophical,applied kinesiology,aromatherapy,ayurveda,herbalism,homeopathy,hydrotherapy,hypnosis,naturopathy,osteopathy,reflexology,reiki,shiatsu,traditional,tuina,unani"
                },
                "healthcare/alternative/chiropractic": {
                    "name": "Chiropractor",
                    "terms": "back,pain,spine"
                },
                "healthcare/audiologist": {
                    "name": "Audiologist",
                    "terms": "ear,hearing,sound"
                },
                "healthcare/birthing_center": {
                    "name": "Birthing Center",
                    "terms": "baby,childbirth,delivery,labour,labor,pregnancy"
                },
                "healthcare/blood_donation": {
                    "name": "Blood Donor Center",
                    "terms": "blood bank,blood donation,blood transfusion,apheresis,plasmapheresis,plateletpheresis,stem cell donation"
                },
                "healthcare/hospice": {
                    "name": "Hospice",
                    "terms": "terminal,illness"
                },
                "healthcare/midwife": {
                    "name": "Midwife",
                    "terms": "baby,childbirth,delivery,labour,labor,pregnancy"
                },
                "healthcare/occupational_therapist": {
                    "name": "Occupational Therapist",
                    "terms": "therapist,therapy"
                },
                "healthcare/optometrist": {
                    "name": "Optometrist",
                    "terms": "eye,glasses,lasik,lenses,vision"
                },
                "healthcare/physiotherapist": {
                    "name": "Physiotherapist",
                    "terms": "physical,therapist,therapy"
                },
                "healthcare/podiatrist": {
                    "name": "Podiatrist",
                    "terms": "foot,feet,nails"
                },
                "healthcare/psychotherapist": {
                    "name": "Psychotherapist",
                    "terms": "anxiety,counselor,depression,mental health,mind,suicide,therapist,therapy"
                },
                "healthcare/rehabilitation": {
                    "name": "Rehabilitation Facility",
                    "terms": "rehab,therapist,therapy"
                },
                "healthcare/speech_therapist": {
                    "name": "Speech Therapist",
                    "terms": "speech,therapist,therapy,voice"
                },
                "highway/bus_stop": {
                    "name": "Bus Stop / Platform",
                    "terms": ""
                },
                "highway/bridleway": {
                    "name": "Bridle Path",
                    "terms": "bridleway,equestrian,horse"
                },
                "highway/corridor": {
                    "name": "Indoor Corridor",
                    "terms": "gallery,hall,hallway,indoor,passage,passageway"
                },
                "highway/crossing-raised": {
                    "name": "Raised Street Crossing",
                    "terms": "flat top,hump,speed,slow"
                },
                "highway/crossing": {
                    "name": "Street Crossing",
                    "terms": ""
                },
                "highway/crosswalk-raised": {
                    "name": "Raised Pedestrian Crosswalk",
                    "terms": "zebra crossing,flat top,hump,speed,slow"
                },
                "highway/crosswalk": {
                    "name": "Pedestrian Crosswalk",
                    "terms": "zebra crossing"
                },
                "highway/cycleway": {
                    "name": "Cycle Path",
                    "terms": "bike"
                },
                "highway/elevator": {
                    "name": "Elevator",
                    "terms": "lift"
                },
                "highway/footway": {
                    "name": "Foot Path",
                    "terms": "hike,hiking,trackway,trail,walk"
                },
                "highway/give_way": {
                    "name": "Yield Sign",
                    "terms": "give way,yield,sign"
                },
                "highway/living_street": {
                    "name": "Living Street",
                    "terms": ""
                },
                "highway/mini_roundabout": {
                    "name": "Mini-Roundabout",
                    "terms": ""
                },
                "highway/motorway_junction": {
                    "name": "Motorway Junction / Exit",
                    "terms": ""
                },
                "highway/motorway_link": {
                    "name": "Motorway Link",
                    "terms": "ramp,on ramp,off ramp"
                },
                "highway/motorway": {
                    "name": "Motorway",
                    "terms": "autobahn,expressway,freeway,highway,interstate,parkway,thruway,turnpike"
                },
                "highway/path": {
                    "name": "Path",
                    "terms": "hike,hiking,trackway,trail,walk"
                },
                "highway/pedestrian_area": {
                    "name": "Pedestrian Area",
                    "terms": "center,centre,plaza,quad,square,walkway"
                },
                "highway/pedestrian_line": {
                    "name": "Pedestrian Street",
                    "terms": "center,centre,plaza,quad,square,walkway"
                },
                "highway/primary_link": {
                    "name": "Primary Link",
                    "terms": "ramp,on ramp,off ramp"
                },
                "highway/primary": {
                    "name": "Primary Road",
                    "terms": ""
                },
                "highway/raceway": {
                    "name": "Racetrack (Motorsport)",
                    "terms": "auto*,formula one,kart,motocross,nascar,race*,track"
                },
                "highway/residential": {
                    "name": "Residential Road",
                    "terms": ""
                },
                "highway/rest_area": {
                    "name": "Rest Area",
                    "terms": "rest stop"
                },
                "highway/road": {
                    "name": "Unknown Road",
                    "terms": ""
                },
                "highway/secondary_link": {
                    "name": "Secondary Link",
                    "terms": "ramp,on ramp,off ramp"
                },
                "highway/secondary": {
                    "name": "Secondary Road",
                    "terms": ""
                },
                "highway/service": {
                    "name": "Service Road",
                    "terms": ""
                },
                "highway/service/alley": {
                    "name": "Alley",
                    "terms": ""
                },
                "highway/service/drive-through": {
                    "name": "Drive-Through",
                    "terms": ""
                },
                "highway/service/driveway": {
                    "name": "Driveway",
                    "terms": ""
                },
                "highway/service/emergency_access": {
                    "name": "Emergency Access",
                    "terms": ""
                },
                "highway/service/parking_aisle": {
                    "name": "Parking Aisle",
                    "terms": ""
                },
                "highway/services": {
                    "name": "Service Area",
                    "terms": "services,travel plaza,service station"
                },
                "highway/speed_camera": {
                    "name": "Speed Camera",
                    "terms": ""
                },
                "highway/steps": {
                    "name": "Steps",
                    "terms": "stairs,staircase"
                },
                "highway/stop": {
                    "name": "Stop Sign",
                    "terms": "stop,halt,sign"
                },
                "highway/street_lamp": {
                    "name": "Street Lamp",
                    "terms": "streetlight,street light,lamp,light,gaslight"
                },
                "highway/tertiary_link": {
                    "name": "Tertiary Link",
                    "terms": "ramp,on ramp,off ramp"
                },
                "highway/tertiary": {
                    "name": "Tertiary Road",
                    "terms": ""
                },
                "highway/track": {
                    "name": "Unmaintained Track Road",
                    "terms": "woods road,forest road,logging road,fire road,farm road,agricultural road,ranch road,carriage road,primitive,unmaintained,rut,offroad,4wd,4x4,four wheel drive,atv,quad,jeep,double track,two track"
                },
                "highway/traffic_mirror": {
                    "name": "Traffic Mirror",
                    "terms": "blind spot,convex,corner,curved,roadside,round,safety,sphere,visibility"
                },
                "highway/traffic_signals": {
                    "name": "Traffic Signals",
                    "terms": "light,stoplight,traffic light"
                },
                "highway/trunk_link": {
                    "name": "Trunk Link",
                    "terms": "ramp,on ramp,off ramp"
                },
                "highway/trunk": {
                    "name": "Trunk Road",
                    "terms": ""
                },
                "highway/turning_circle": {
                    "name": "Turning Circle",
                    "terms": "cul-de-sac"
                },
                "highway/turning_loop": {
                    "name": "Turning Loop (Island)",
                    "terms": "cul-de-sac"
                },
                "highway/unclassified": {
                    "name": "Minor/Unclassified Road",
                    "terms": ""
                },
                "historic": {
                    "name": "Historic Site",
                    "terms": ""
                },
                "historic/archaeological_site": {
                    "name": "Archaeological Site",
                    "terms": ""
                },
                "historic/boundary_stone": {
                    "name": "Boundary Stone",
                    "terms": ""
                },
                "historic/castle": {
                    "name": "Castle",
                    "terms": ""
                },
                "historic/memorial": {
                    "name": "Memorial",
                    "terms": ""
                },
                "historic/monument": {
                    "name": "Monument",
                    "terms": ""
                },
                "historic/ruins": {
                    "name": "Ruins",
                    "terms": ""
                },
                "historic/tomb": {
                    "name": "Tomb",
                    "terms": ""
                },
                "historic/wayside_cross": {
                    "name": "Wayside Cross",
                    "terms": ""
                },
                "historic/wayside_shrine": {
                    "name": "Wayside Shrine",
                    "terms": ""
                },
                "junction": {
                    "name": "Junction",
                    "terms": ""
                },
                "landuse": {
                    "name": "Land Use",
                    "terms": ""
                },
                "landuse/farm": {
                    "name": "Farmland",
                    "terms": ""
                },
                "landuse/allotments": {
                    "name": "Community Garden",
                    "terms": "allotment,garden"
                },
                "landuse/aquaculture": {
                    "name": "Aquaculture",
                    "terms": "fish farm,crustacean,algae,aquafarming,shrimp farm,oyster farm,mariculture,algaculture"
                },
                "landuse/basin": {
                    "name": "Basin",
                    "terms": ""
                },
                "landuse/brownfield": {
                    "name": "Brownfield",
                    "terms": ""
                },
                "landuse/cemetery": {
                    "name": "Cemetery",
                    "terms": ""
                },
                "landuse/churchyard": {
                    "name": "Churchyard",
                    "terms": ""
                },
                "landuse/commercial": {
                    "name": "Commercial Area",
                    "terms": ""
                },
                "landuse/construction": {
                    "name": "Construction",
                    "terms": ""
                },
                "landuse/farmland": {
                    "name": "Farmland",
                    "terms": "crop,grow,plant"
                },
                "landuse/farmyard": {
                    "name": "Farmyard",
                    "terms": "crop,grow,plant"
                },
                "landuse/forest": {
                    "name": "Forest",
                    "terms": "tree"
                },
                "landuse/garages": {
                    "name": "Garages",
                    "terms": ""
                },
                "landuse/grass": {
                    "name": "Grass",
                    "terms": ""
                },
                "landuse/greenfield": {
                    "name": "Greenfield",
                    "terms": ""
                },
                "landuse/greenhouse_horticulture": {
                    "name": "Greenhouse Horticulture",
                    "terms": "flower,greenhouse,horticulture,grow,vivero"
                },
                "landuse/harbour": {
                    "name": "Harbor",
                    "terms": "boat"
                },
                "landuse/industrial": {
                    "name": "Industrial Area",
                    "terms": ""
                },
                "landuse/industrial/scrap_yard": {
                    "name": "Scrap Yard",
                    "terms": "car,junk,metal,salvage,scrap,u-pull-it,vehicle,wreck,yard"
                },
                "landuse/industrial/slaughterhouse": {
                    "name": "Slaughterhouse",
                    "terms": "abattoir,beef,butchery,calf,chicken,cow,killing house,meat,pig,pork,poultry,shambles,stockyard"
                },
                "landuse/landfill": {
                    "name": "Landfill",
                    "terms": "dump"
                },
                "landuse/meadow": {
                    "name": "Meadow",
                    "terms": ""
                },
                "landuse/military": {
                    "name": "Military Area",
                    "terms": ""
                },
                "landuse/military/airfield": {
                    "name": "Military Airfield",
                    "terms": "air force,army,base,bomb,fight,force,guard,heli*,jet,marine,navy,plane,troop,war"
                },
                "landuse/military/barracks": {
                    "name": "Barracks",
                    "terms": "air force,army,base,fight,force,guard,marine,navy,troop,war"
                },
                "landuse/military/bunker": {
                    "name": "Military Bunker",
                    "terms": "air force,army,base,fight,force,guard,marine,navy,troop,war"
                },
                "landuse/military/checkpoint": {
                    "name": "Checkpoint",
                    "terms": "air force,army,base,force,guard,marine,navy,troop,war"
                },
                "landuse/military/danger_area": {
                    "name": "Danger Area",
                    "terms": "air force,army,base,blast,bomb,explo*,force,guard,mine,marine,navy,troop,war"
                },
                "landuse/military/naval_base": {
                    "name": "Naval Base",
                    "terms": "base,fight,force,guard,marine,navy,ship,sub,troop,war"
                },
                "landuse/military/nuclear_explosion_site": {
                    "name": "Nuclear Explosion Site",
                    "terms": "atom,blast,bomb,detonat*,nuke,site,test"
                },
                "landuse/military/obstacle_course": {
                    "name": "Obstacle Course",
                    "terms": "army,base,force,guard,marine,navy,troop,war"
                },
                "landuse/military/office": {
                    "name": "Military Office",
                    "terms": "air force,army,base,enlist,fight,force,guard,marine,navy,recruit,troop,war"
                },
                "landuse/military/range": {
                    "name": "Military Range",
                    "terms": "air force,army,base,fight,fire,force,guard,gun,marine,navy,rifle,shoot*,snip*,train,troop,war"
                },
                "landuse/military/training_area": {
                    "name": "Training Area",
                    "terms": "air force,army,base,fight,fire,force,guard,gun,marine,navy,rifle,shoot*,snip*,train,troop,war"
                },
                "landuse/orchard": {
                    "name": "Orchard",
                    "terms": "fruit"
                },
                "landuse/plant_nursery": {
                    "name": "Plant Nursery",
                    "terms": "flower,garden,grow,vivero"
                },
                "landuse/quarry": {
                    "name": "Quarry",
                    "terms": ""
                },
                "landuse/railway": {
                    "name": "Railway Corridor",
                    "terms": "rail,train,track"
                },
                "landuse/recreation_ground": {
                    "name": "Recreation Ground",
                    "terms": "playing fields"
                },
                "landuse/religious": {
                    "name": "Religious Area",
                    "terms": ""
                },
                "landuse/residential": {
                    "name": "Residential Area",
                    "terms": ""
                },
                "landuse/retail": {
                    "name": "Retail Area",
                    "terms": ""
                },
                "landuse/vineyard": {
                    "name": "Vineyard",
                    "terms": "grape,wine"
                },
                "leisure": {
                    "name": "Leisure",
                    "terms": ""
                },
                "leisure/adult_gaming_centre": {
                    "name": "Adult Gaming Center",
                    "terms": "gambling,slot machine"
                },
                "leisure/bird_hide": {
                    "name": "Bird Hide",
                    "terms": "machan,ornithology"
                },
                "leisure/bowling_alley": {
                    "name": "Bowling Alley",
                    "terms": "bowling center"
                },
                "leisure/common": {
                    "name": "Common",
                    "terms": "open space"
                },
                "leisure/dance": {
                    "name": "Dance Hall",
                    "terms": "ballroom,jive,swing,tango,waltz"
                },
                "leisure/dog_park": {
                    "name": "Dog Park",
                    "terms": ""
                },
                "leisure/firepit": {
                    "name": "Firepit",
                    "terms": "fireplace,campfire"
                },
                "leisure/fitness_centre": {
                    "name": "Gym / Fitness Center",
                    "terms": "health,gym,leisure,studio"
                },
                "leisure/fitness_centre/yoga": {
                    "name": "Yoga Studio",
                    "terms": "studio"
                },
                "leisure/fitness_station": {
                    "name": "Outdoor Fitness Station",
                    "terms": "exercise,fitness,gym,trim trail"
                },
                "leisure/fitness_station/balance_beam": {
                    "name": "Exercise Balance Beam",
                    "terms": "balance,exercise,fitness,gym,trim trail"
                },
                "leisure/fitness_station/box": {
                    "name": "Exercise Box",
                    "terms": "box,exercise,fitness,gym,jump,trim trail"
                },
                "leisure/fitness_station/horizontal_bar": {
                    "name": "Exercise Horizontal Bar",
                    "terms": "bar,chinup,chin up,exercise,fitness,gym,pullup,pull up,trim trail"
                },
                "leisure/fitness_station/horizontal_ladder": {
                    "name": "Exercise Monkey Bars",
                    "terms": "bar,chinup,chin up,exercise,fitness,gym,ladder,monkey bars,pullup,pull up,trim trail"
                },
                "leisure/fitness_station/hyperextension": {
                    "name": "Hyperextension Station",
                    "terms": "back,exercise,extension,fitness,gym,roman chair,trim trail"
                },
                "leisure/fitness_station/parallel_bars": {
                    "name": "Parallel Bars",
                    "terms": "bar,dip,exercise,fitness,gym,trim trail"
                },
                "leisure/fitness_station/push-up": {
                    "name": "Push-Up Station",
                    "terms": "bar,exercise,fitness,gym,pushup,push up,trim trail"
                },
                "leisure/fitness_station/rings": {
                    "name": "Exercise Rings",
                    "terms": "exercise,fitness,gym,muscle up,pullup,pull up,trim trail"
                },
                "leisure/fitness_station/sign": {
                    "name": "Exercise Instruction Sign",
                    "terms": "exercise,fitness,gym,trim trail"
                },
                "leisure/fitness_station/sit-up": {
                    "name": "Sit-Up Station",
                    "terms": "crunch,exercise,fitness,gym,situp,sit up,trim trail"
                },
                "leisure/fitness_station/stairs": {
                    "name": "Exercise Stairs",
                    "terms": "exercise,fitness,gym,steps,trim trail"
                },
                "leisure/garden": {
                    "name": "Garden",
                    "terms": ""
                },
                "leisure/golf_course": {
                    "name": "Golf Course",
                    "terms": "links"
                },
                "leisure/hackerspace": {
                    "name": "Hackerspace",
                    "terms": "makerspace,hackspace,hacklab"
                },
                "leisure/horse_riding": {
                    "name": "Horseback Riding Facility",
                    "terms": "equestrian,stable"
                },
                "leisure/ice_rink": {
                    "name": "Ice Rink",
                    "terms": "hockey,skating,curling"
                },
                "leisure/marina": {
                    "name": "Marina",
                    "terms": "boat"
                },
                "leisure/miniature_golf": {
                    "name": "Miniature Golf",
                    "terms": "crazy golf,mini golf,putt-putt"
                },
                "leisure/nature_reserve": {
                    "name": "Nature Reserve",
                    "terms": "protected,wildlife"
                },
                "leisure/park": {
                    "name": "Park",
                    "terms": "esplanade,estate,forest,garden,grass,green,grounds,lawn,lot,meadow,parkland,place,playground,plaza,pleasure garden,recreation area,square,tract,village green,woodland"
                },
                "leisure/picnic_table": {
                    "name": "Picnic Table",
                    "terms": "bench"
                },
                "leisure/pitch": {
                    "name": "Sport Pitch",
                    "terms": "field"
                },
                "leisure/pitch/american_football": {
                    "name": "American Football Field",
                    "terms": ""
                },
                "leisure/pitch/baseball": {
                    "name": "Baseball Diamond",
                    "terms": ""
                },
                "leisure/pitch/basketball": {
                    "name": "Basketball Court",
                    "terms": ""
                },
                "leisure/pitch/beachvolleyball": {
                    "name": "Beach Volleyball Court",
                    "terms": "volleyball"
                },
                "leisure/pitch/boules": {
                    "name": "Boules/Bocce Court",
                    "terms": "bocce,lyonnaise,pétanque"
                },
                "leisure/pitch/bowls": {
                    "name": "Bowling Green",
                    "terms": ""
                },
                "leisure/pitch/cricket": {
                    "name": "Cricket Field",
                    "terms": ""
                },
                "leisure/pitch/equestrian": {
                    "name": "Riding Arena",
                    "terms": "dressage,equestrian,horse,horseback,riding"
                },
                "leisure/pitch/rugby_league": {
                    "name": "Rugby League Field",
                    "terms": ""
                },
                "leisure/pitch/rugby_union": {
                    "name": "Rugby Union Field",
                    "terms": ""
                },
                "leisure/pitch/skateboard": {
                    "name": "Skate Park",
                    "terms": ""
                },
                "leisure/pitch/soccer": {
                    "name": "Soccer Field",
                    "terms": "football"
                },
                "leisure/pitch/table_tennis": {
                    "name": "Ping Pong Table",
                    "terms": "table tennis,ping pong"
                },
                "leisure/pitch/tennis": {
                    "name": "Tennis Court",
                    "terms": ""
                },
                "leisure/pitch/volleyball": {
                    "name": "Volleyball Court",
                    "terms": ""
                },
                "leisure/playground": {
                    "name": "Playground",
                    "terms": "jungle gym,play area"
                },
                "leisure/resort": {
                    "name": "Resort",
                    "terms": ""
                },
                "leisure/running_track": {
                    "name": "Racetrack (Running)",
                    "terms": "race*,running,sprint,track"
                },
                "leisure/sauna": {
                    "name": "Sauna",
                    "terms": ""
                },
                "leisure/slipway": {
                    "name": "Slipway",
                    "terms": "boat launch,boat ramp"
                },
                "leisure/sports_centre": {
                    "name": "Sports Center / Complex",
                    "terms": ""
                },
                "leisure/sports_centre/swimming": {
                    "name": "Swimming Pool Facility",
                    "terms": "dive,water"
                },
                "leisure/stadium": {
                    "name": "Stadium",
                    "terms": ""
                },
                "leisure/swimming_pool": {
                    "name": "Swimming Pool",
                    "terms": "dive,water"
                },
                "leisure/track": {
                    "name": "Racetrack (Non-Motorsport)",
                    "terms": "cycle,dog,greyhound,horse,race*,track"
                },
                "leisure/water_park": {
                    "name": "Water Park",
                    "terms": "swim,pool,dive"
                },
                "line": {
                    "name": "Line",
                    "terms": ""
                },
                "man_made": {
                    "name": "Man Made",
                    "terms": ""
                },
                "man_made/embankment": {
                    "name": "Embankment",
                    "terms": ""
                },
                "man_made/adit": {
                    "name": "Adit",
                    "terms": "entrance,underground,mine,cave"
                },
                "man_made/breakwater": {
                    "name": "Breakwater",
                    "terms": ""
                },
                "man_made/bridge": {
                    "name": "Bridge",
                    "terms": ""
                },
                "man_made/chimney": {
                    "name": "Chimney",
                    "terms": ""
                },
                "man_made/crane": {
                    "name": "Crane",
                    "terms": ""
                },
                "man_made/cutline": {
                    "name": "Cut line",
                    "terms": ""
                },
                "man_made/flagpole": {
                    "name": "Flagpole",
                    "terms": ""
                },
                "man_made/gasometer": {
                    "name": "Gasometer",
                    "terms": "gas holder"
                },
                "man_made/groyne": {
                    "name": "Groyne",
                    "terms": ""
                },
                "man_made/lighthouse": {
                    "name": "Lighthouse",
                    "terms": ""
                },
                "man_made/mast": {
                    "name": "Mast",
                    "terms": "antenna,broadcast tower,cell phone tower,cell tower,communication mast,communication tower,guyed tower,mobile phone tower,radio mast,radio tower,television tower,transmission mast,transmission tower,tv tower"
                },
                "man_made/monitoring_station": {
                    "name": "Monitoring Station",
                    "terms": "weather,earthquake,seismology,air,gps"
                },
                "man_made/observation": {
                    "name": "Observation Tower",
                    "terms": "lookout tower,fire tower"
                },
                "man_made/petroleum_well": {
                    "name": "Oil Well",
                    "terms": "drilling rig,oil derrick,oil drill,oil horse,oil rig,oil pump,petroleum well,pumpjack"
                },
                "man_made/pier": {
                    "name": "Pier",
                    "terms": "dock,jetty"
                },
                "man_made/pipeline": {
                    "name": "Pipeline",
                    "terms": ""
                },
                "man_made/pumping_station": {
                    "name": "Pumping Station",
                    "terms": ""
                },
                "man_made/silo": {
                    "name": "Silo",
                    "terms": "grain,corn,wheat"
                },
                "man_made/storage_tank": {
                    "name": "Storage Tank",
                    "terms": "water,oil,gas,petrol"
                },
                "man_made/surveillance_camera": {
                    "name": "Surveillance Camera",
                    "terms": "anpr,alpr,camera,car plate recognition,cctv,guard,license plate recognition,monitoring,number plate recognition,security,video,webcam"
                },
                "man_made/surveillance": {
                    "name": "Surveillance",
                    "terms": "anpr,alpr,camera,car plate recognition,cctv,guard,license plate recognition,monitoring,number plate recognition,security,video,webcam"
                },
                "man_made/survey_point": {
                    "name": "Survey Point",
                    "terms": "trig point,triangulation pillar,trigonometrical station"
                },
                "man_made/tower": {
                    "name": "Tower",
                    "terms": ""
                },
                "man_made/wastewater_plant": {
                    "name": "Wastewater Plant",
                    "terms": "sewage*,water treatment plant,reclamation plant"
                },
                "man_made/water_tower": {
                    "name": "Water Tower",
                    "terms": ""
                },
                "man_made/water_well": {
                    "name": "Water Well",
                    "terms": ""
                },
                "man_made/water_works": {
                    "name": "Water Works",
                    "terms": ""
                },
                "man_made/watermill": {
                    "name": "Watermill",
                    "terms": "water,wheel,mill"
                },
                "man_made/windmill": {
                    "name": "Windmill",
                    "terms": "wind,wheel,mill"
                },
                "man_made/works": {
                    "name": "Factory",
                    "terms": "assembly,build,brewery,car,plant,plastic,processing,manufacture,refinery"
                },
                "manhole": {
                    "name": "Manhole",
                    "terms": "cover,hole,sewer,sewage,telecom"
                },
                "manhole/drain": {
                    "name": "Storm Drain",
                    "terms": "cover,drain,hole,rain,sewer,sewage,storm"
                },
                "manhole/telecom": {
                    "name": "Telecom Manhole",
                    "terms": "cover,phone,hole,telecom,telephone,bt"
                },
                "natural": {
                    "name": "Natural",
                    "terms": ""
                },
                "natural/bare_rock": {
                    "name": "Bare Rock",
                    "terms": "rock"
                },
                "natural/bay": {
                    "name": "Bay",
                    "terms": ""
                },
                "natural/beach": {
                    "name": "Beach",
                    "terms": "shore"
                },
                "natural/cave_entrance": {
                    "name": "Cave Entrance",
                    "terms": "cavern,hollow,grotto,shelter,cavity"
                },
                "natural/cliff": {
                    "name": "Cliff",
                    "terms": "escarpment"
                },
                "natural/coastline": {
                    "name": "Coastline",
                    "terms": "shore"
                },
                "natural/fell": {
                    "name": "Fell",
                    "terms": ""
                },
                "natural/glacier": {
                    "name": "Glacier",
                    "terms": ""
                },
                "natural/grassland": {
                    "name": "Grassland",
                    "terms": "prairie,savanna"
                },
                "natural/heath": {
                    "name": "Heath",
                    "terms": ""
                },
                "natural/peak": {
                    "name": "Peak",
                    "terms": "acme,aiguille,alp,climax,crest,crown,hill,mount,mountain,pinnacle,summit,tip,top"
                },
                "natural/ridge": {
                    "name": "Ridge",
                    "terms": "crest"
                },
                "natural/saddle": {
                    "name": "Saddle",
                    "terms": "pass,mountain pass,top"
                },
                "natural/sand": {
                    "name": "Sand",
                    "terms": "desert"
                },
                "natural/scree": {
                    "name": "Scree",
                    "terms": "loose rocks"
                },
                "natural/scrub": {
                    "name": "Scrub",
                    "terms": "bush,shrubs"
                },
                "natural/spring": {
                    "name": "Spring",
                    "terms": ""
                },
                "natural/tree_row": {
                    "name": "Tree row",
                    "terms": ""
                },
                "natural/tree": {
                    "name": "Tree",
                    "terms": ""
                },
                "natural/volcano": {
                    "name": "Volcano",
                    "terms": "mountain,crater"
                },
                "natural/water": {
                    "name": "Water",
                    "terms": ""
                },
                "natural/water/lake": {
                    "name": "Lake",
                    "terms": "lakelet,loch,mere"
                },
                "natural/water/pond": {
                    "name": "Pond",
                    "terms": "lakelet,millpond,tarn,pool,mere"
                },
                "natural/water/reservoir": {
                    "name": "Reservoir",
                    "terms": ""
                },
                "natural/wetland": {
                    "name": "Wetland",
                    "terms": "bog,marsh,reedbed,swamp,tidalflat"
                },
                "natural/wood": {
                    "name": "Wood",
                    "terms": "tree"
                },
                "noexit/yes": {
                    "name": "No Exit",
                    "terms": "no exit,road end,dead end"
                },
                "office": {
                    "name": "Office",
                    "terms": ""
                },
                "office/administrative": {
                    "name": "Administrative Office",
                    "terms": ""
                },
                "office/physician": {
                    "name": "Physician",
                    "terms": ""
                },
                "office/travel_agent": {
                    "name": "Travel Agency",
                    "terms": ""
                },
                "office/accountant": {
                    "name": "Accountant Office",
                    "terms": ""
                },
                "office/adoption_agency": {
                    "name": "Adoption Agency",
                    "terms": ""
                },
                "office/advertising_agency": {
                    "name": "Advertising Agency",
                    "terms": "ad,ad agency,advert agency,advertising,marketing"
                },
                "office/architect": {
                    "name": "Architect Office",
                    "terms": ""
                },
                "office/association": {
                    "name": "Nonprofit Organization Office",
                    "terms": "association,non-profit,nonprofit,organization,society"
                },
                "office/charity": {
                    "name": "Charity Office",
                    "terms": "charitable organization"
                },
                "office/company": {
                    "name": "Company Office",
                    "terms": ""
                },
                "office/coworking": {
                    "name": "Coworking Space",
                    "terms": "coworking,office"
                },
                "office/educational_institution": {
                    "name": "Educational Institution",
                    "terms": ""
                },
                "office/employment_agency": {
                    "name": "Employment Agency",
                    "terms": "job"
                },
                "office/energy_supplier": {
                    "name": "Energy Supplier Office",
                    "terms": "electricity,energy company,energy utility,gas utility"
                },
                "office/estate_agent": {
                    "name": "Real Estate Office",
                    "terms": ""
                },
                "office/financial": {
                    "name": "Financial Office",
                    "terms": ""
                },
                "office/forestry": {
                    "name": "Forestry Office",
                    "terms": "forest,ranger"
                },
                "office/foundation": {
                    "name": "Foundation Office",
                    "terms": ""
                },
                "office/government": {
                    "name": "Government Office",
                    "terms": ""
                },
                "office/government/register_office": {
                    "name": "Register Office",
                    "terms": "clerk,marriage,death,birth,certificate"
                },
                "office/government/tax": {
                    "name": "Tax and Revenue Office",
                    "terms": "fiscal authorities,revenue office,tax office"
                },
                "office/guide": {
                    "name": "Tour Guide Office",
                    "terms": "dive guide,mountain guide,tour guide"
                },
                "office/insurance": {
                    "name": "Insurance Office",
                    "terms": ""
                },
                "office/it": {
                    "name": "Information Technology Office",
                    "terms": "computer,information,software,technology"
                },
                "office/lawyer": {
                    "name": "Law Office",
                    "terms": ""
                },
                "office/lawyer/notary": {
                    "name": "Notary Office",
                    "terms": "clerk,signature,wills,deeds,estate"
                },
                "office/moving_company": {
                    "name": "Moving Company Office",
                    "terms": "relocation"
                },
                "office/newspaper": {
                    "name": "Newspaper Office",
                    "terms": ""
                },
                "office/ngo": {
                    "name": "NGO Office",
                    "terms": "ngo,non government,non-government,organization,organisation"
                },
                "office/notary": {
                    "name": "Notary Office",
                    "terms": ""
                },
                "office/political_party": {
                    "name": "Political Party",
                    "terms": ""
                },
                "office/private_investigator": {
                    "name": "Private Investigator Office",
                    "terms": "PI,private eye,private detective"
                },
                "office/quango": {
                    "name": "Quasi-NGO Office",
                    "terms": "ngo,non government,non-government,organization,organisation,quasi autonomous,quasi-autonomous"
                },
                "office/research": {
                    "name": "Research Office",
                    "terms": ""
                },
                "office/surveyor": {
                    "name": "Surveyor Office",
                    "terms": ""
                },
                "office/tax_advisor": {
                    "name": "Tax Advisor Office",
                    "terms": "tax,tax consultant"
                },
                "office/telecommunication": {
                    "name": "Telecom Office",
                    "terms": ""
                },
                "office/therapist": {
                    "name": "Therapist Office",
                    "terms": "therapy"
                },
                "office/water_utility": {
                    "name": "Water Utility Office",
                    "terms": "water board,utility"
                },
                "piste": {
                    "name": "Piste/Ski Trail",
                    "terms": "ski,sled,sleigh,snowboard,nordic,downhill,snowmobile"
                },
                "place/farm": {
                    "name": "Farm",
                    "terms": ""
                },
                "place/city": {
                    "name": "City",
                    "terms": ""
                },
                "place/hamlet": {
                    "name": "Hamlet",
                    "terms": ""
                },
                "place/island": {
                    "name": "Island",
                    "terms": "archipelago,atoll,bar,cay,isle,islet,key,reef"
                },
                "place/islet": {
                    "name": "Islet",
                    "terms": "archipelago,atoll,bar,cay,isle,islet,key,reef"
                },
                "place/isolated_dwelling": {
                    "name": "Isolated Dwelling",
                    "terms": ""
                },
                "place/locality": {
                    "name": "Locality",
                    "terms": ""
                },
                "place/neighbourhood": {
                    "name": "Neighborhood",
                    "terms": "neighbourhood"
                },
                "place/plot": {
                    "name": "Plot",
                    "terms": "tract,land,lot,parcel"
                },
                "place/quarter": {
                    "name": "Sub-Borough / Quarter",
                    "terms": "boro,borough,quarter"
                },
                "place/square": {
                    "name": "Square",
                    "terms": ""
                },
                "place/suburb": {
                    "name": "Borough / Suburb",
                    "terms": "boro,borough,quarter"
                },
                "place/town": {
                    "name": "Town",
                    "terms": ""
                },
                "place/village": {
                    "name": "Village",
                    "terms": ""
                },
                "playground/balance_beam": {
                    "name": "Play Balance Beam",
                    "terms": ""
                },
                "playground/basket_spinner": {
                    "name": "Basket Spinner",
                    "terms": "basket rotator"
                },
                "playground/basket_swing": {
                    "name": "Basket Swing",
                    "terms": ""
                },
                "playground/climbing_frame": {
                    "name": "Climbing Frame",
                    "terms": ""
                },
                "playground/cushion": {
                    "name": "Bouncy Cushion",
                    "terms": ""
                },
                "playground/horizontal_bar": {
                    "name": "Play Horizontal Bar",
                    "terms": "high bar"
                },
                "playground/rocker": {
                    "name": "Spring Rider",
                    "terms": "spring rocker,springy rocker"
                },
                "playground/roundabout": {
                    "name": "Play Roundabout",
                    "terms": "merry-go-round"
                },
                "playground/sandpit": {
                    "name": "Sandpit",
                    "terms": ""
                },
                "playground/seesaw": {
                    "name": "Seesaw",
                    "terms": ""
                },
                "playground/slide": {
                    "name": "Slide",
                    "terms": ""
                },
                "playground/structure": {
                    "name": "Play Structure",
                    "terms": ""
                },
                "playground/swing": {
                    "name": "Swing",
                    "terms": ""
                },
                "playground/zipwire": {
                    "name": "Zip Wire",
                    "terms": ""
                },
                "point": {
                    "name": "Point",
                    "terms": ""
                },
                "power/sub_station": {
                    "name": "Substation",
                    "terms": ""
                },
                "power/generator": {
                    "name": "Power Generator",
                    "terms": "hydro,solar,turbine,wind"
                },
                "power/generator/source_nuclear": {
                    "name": "Nuclear Reactor",
                    "terms": "fission,generator,nuclear,nuke,reactor"
                },
                "power/generator/source_wind": {
                    "name": "Wind Turbine",
                    "terms": "generator,turbine,windmill,wind"
                },
                "power/line": {
                    "name": "Power Line",
                    "terms": ""
                },
                "power/minor_line": {
                    "name": "Minor Power Line",
                    "terms": ""
                },
                "power/plant": {
                    "name": "Power Station Grounds",
                    "terms": "coal,gas,generat*,hydro,nuclear,power,station"
                },
                "power/pole": {
                    "name": "Power Pole",
                    "terms": ""
                },
                "power/substation": {
                    "name": "Substation",
                    "terms": ""
                },
                "power/switch": {
                    "name": "Power Switch",
                    "terms": ""
                },
                "power/tower": {
                    "name": "High-Voltage Tower",
                    "terms": ""
                },
                "power/transformer": {
                    "name": "Transformer",
                    "terms": ""
                },
                "public_transport/linear_platform_aerialway": {
                    "name": "Aerialway Stop / Platform",
                    "terms": "aerialway,cable car,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/linear_platform_bus": {
                    "name": "Bus Stop / Platform",
                    "terms": "bus,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/linear_platform_ferry": {
                    "name": "Ferry Stop / Platform",
                    "terms": "boat,dock,ferry,pier,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/linear_platform_light_rail": {
                    "name": "Light Rail Stop / Platform",
                    "terms": "electric,light rail,platform,public transit,public transportation,rail,track,tram,trolley,transit,transportation"
                },
                "public_transport/linear_platform_monorail": {
                    "name": "Monorail Stop / Platform",
                    "terms": "monorail,platform,public transit,public transportation,rail,transit,transportation"
                },
                "public_transport/linear_platform_subway": {
                    "name": "Subway Stop / Platform",
                    "terms": "metro,platform,public transit,public transportation,rail,subway,track,transit,transportation,underground"
                },
                "public_transport/linear_platform_train": {
                    "name": "Train Stop / Platform",
                    "terms": "platform,public transit,public transportation,rail,track,train,transit,transportation"
                },
                "public_transport/linear_platform_tram": {
                    "name": "Tram Stop / Platform",
                    "terms": "electric,light rail,platform,public transit,public transportation,rail,streetcar,track,tram,trolley,transit,transportation"
                },
                "public_transport/linear_platform_trolleybus": {
                    "name": "Trolleybus Stop / Platform",
                    "terms": "bus,electric,platform,public transit,public transportation,streetcar,trackless,tram,trolley,transit,transportation"
                },
                "public_transport/linear_platform": {
                    "name": "Transit Stop / Platform",
                    "terms": "platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/platform_aerialway": {
                    "name": "Aerialway Stop / Platform",
                    "terms": "aerialway,cable car,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/platform_bus": {
                    "name": "Bus Stop / Platform",
                    "terms": "bus,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/platform_ferry": {
                    "name": "Ferry Stop / Platform",
                    "terms": "boat,dock,ferry,pier,platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/platform_light_rail": {
                    "name": "Light Rail Stop / Platform",
                    "terms": "electric,light rail,platform,public transit,public transportation,rail,track,tram,trolley,transit,transportation"
                },
                "public_transport/platform_monorail": {
                    "name": "Monorail Stop / Platform",
                    "terms": "monorail,platform,public transit,public transportation,rail,transit,transportation"
                },
                "public_transport/platform_subway": {
                    "name": "Subway Stop / Platform",
                    "terms": "metro,platform,public transit,public transportation,rail,subway,track,transit,transportation,underground"
                },
                "public_transport/platform_train": {
                    "name": "Train Stop / Platform",
                    "terms": "platform,public transit,public transportation,rail,track,train,transit,transportation"
                },
                "public_transport/platform_tram": {
                    "name": "Tram Stop / Platform",
                    "terms": "electric,light rail,platform,public transit,public transportation,rail,streetcar,track,tram,trolley,transit,transportation"
                },
                "public_transport/platform_trolleybus": {
                    "name": "Trolleybus Stop / Platform",
                    "terms": "bus,electric,platform,public transit,public transportation,streetcar,trackless,tram,trolley,transit,transportation"
                },
                "public_transport/platform": {
                    "name": "Transit Stop / Platform",
                    "terms": "platform,public transit,public transportation,transit,transportation"
                },
                "public_transport/station_aerialway": {
                    "name": "Aerialway Station",
                    "terms": "aerialway,cable car,public transit,public transportation,station,terminal,transit,transportation"
                },
                "public_transport/station_bus": {
                    "name": "Bus Station / Terminal",
                    "terms": "bus,public transit,public transportation,station,terminal,transit,transportation"
                },
                "public_transport/station_ferry": {
                    "name": "Ferry Station / Terminal",
                    "terms": "boat,dock,ferry,pier,public transit,public transportation,station,terminal,transit,transportation"
                },
                "public_transport/station_light_rail": {
                    "name": "Light Rail Station",
                    "terms": "electric,light rail,public transit,public transportation,rail,station,terminal,track,tram,trolley,transit,transportation"
                },
                "public_transport/station_monorail": {
                    "name": "Monorail Station",
                    "terms": "monorail,public transit,public transportation,rail,station,terminal,transit,transportation"
                },
                "public_transport/station_subway": {
                    "name": "Subway Station",
                    "terms": "metro,public transit,public transportation,rail,station,subway,terminal,track,transit,transportation,underground"
                },
                "public_transport/station_train_halt": {
                    "name": "Train Station (Halt / Request)",
                    "terms": "halt,public transit,public transportation,rail,station,track,train,transit,transportation,whistle stop"
                },
                "public_transport/station_train": {
                    "name": "Train Station",
                    "terms": "public transit,public transportation,rail,station,terminal,track,train,transit,transportation"
                },
                "public_transport/station_tram": {
                    "name": "Tram Station",
                    "terms": "electric,light rail,public transit,public transportation,rail,station,streetcar,terminal,track,tram,trolley,transit,transportation"
                },
                "public_transport/station_trolleybus": {
                    "name": "Trolleybus Station / Terminal",
                    "terms": "bus,electric,public transit,public transportation,station,streetcar,terminal,trackless,tram,trolley,transit,transportation"
                },
                "public_transport/station": {
                    "name": "Transit Station",
                    "terms": "public transit,public transportation,station,terminal,transit,transportation"
                },
                "public_transport/stop_area": {
                    "name": "Transit Stop Area",
                    "terms": ""
                },
                "public_transport/stop_position_aerialway": {
                    "name": "Aerialway Stopping Location",
                    "terms": "aerialway,cable car,public transit,public transportation,transit,transportation"
                },
                "public_transport/stop_position_bus": {
                    "name": "Bus Stopping Location",
                    "terms": "bus,public transit,public transportation,transit,transportation"
                },
                "public_transport/stop_position_ferry": {
                    "name": "Ferry Stopping Location",
                    "terms": "boat,dock,ferry,pier,public transit,public transportation,transit,transportation"
                },
                "public_transport/stop_position_light_rail": {
                    "name": "Light Rail Stopping Location",
                    "terms": "electric,light rail,public transit,public transportation,rail,track,tram,trolley,transit,transportation"
                },
                "public_transport/stop_position_monorail": {
                    "name": "Monorail Stopping Location",
                    "terms": "monorail,public transit,public transportation,rail,transit,transportation"
                },
                "public_transport/stop_position_subway": {
                    "name": "Subway Stopping Location",
                    "terms": "metro,public transit,public transportation,rail,subway,track,transit,transportation,underground"
                },
                "public_transport/stop_position_train": {
                    "name": "Train Stopping Location",
                    "terms": "public transit,public transportation,rail,track,train,transit,transportation"
                },
                "public_transport/stop_position_tram": {
                    "name": "Tram Stopping Location",
                    "terms": "electric,light rail,public transit,public transportation,rail,streetcar,track,tram,trolley,transit,transportation"
                },
                "public_transport/stop_position_trolleybus": {
                    "name": "Trolleybus Stopping Location",
                    "terms": "bus,electric,public transit,public transportation,streetcar,trackless,tram,trolley,transit,transportation"
                },
                "public_transport/stop_position": {
                    "name": "Transit Stopping Location",
                    "terms": "public transit,public transportation,transit,transportation"
                },
                "railway/halt": {
                    "name": "Train Station (Halt / Request)",
                    "terms": "break,interrupt,rest,wait,interruption"
                },
                "railway/platform": {
                    "name": "Train Stop / Platform",
                    "terms": ""
                },
                "railway/station": {
                    "name": "Train Station",
                    "terms": "train station,station"
                },
                "railway/tram_stop": {
                    "name": "Tram Stopping Position",
                    "terms": "light rail,streetcar,tram,trolley"
                },
                "railway/abandoned": {
                    "name": "Abandoned Railway",
                    "terms": ""
                },
                "railway/buffer_stop": {
                    "name": "Buffer Stop",
                    "terms": "stop,halt,buffer"
                },
                "railway/crossing": {
                    "name": "Railway Crossing (Path)",
                    "terms": "crossing,pedestrian crossing,railroad crossing,level crossing,grade crossing,path through railroad,train crossing"
                },
                "railway/derail": {
                    "name": "Railway Derailer",
                    "terms": "derailer"
                },
                "railway/disused": {
                    "name": "Disused Railway",
                    "terms": ""
                },
                "railway/funicular": {
                    "name": "Funicular",
                    "terms": "venicular,cliff railway,cable car,cable railway,funicular railway"
                },
                "railway/level_crossing": {
                    "name": "Railway Crossing (Road)",
                    "terms": "crossing,railroad crossing,level crossing,grade crossing,road through railroad,train crossing"
                },
                "railway/light_rail": {
                    "name": "Light Rail",
                    "terms": "light rail,streetcar,trolley"
                },
                "railway/milestone": {
                    "name": "Railway Milestone",
                    "terms": "milestone,marker"
                },
                "railway/miniature": {
                    "name": "Miniature Railway",
                    "terms": "rideable miniature railway,narrow gauge railway,minimum gauge railway"
                },
                "railway/monorail": {
                    "name": "Monorail",
                    "terms": ""
                },
                "railway/narrow_gauge": {
                    "name": "Narrow Gauge Rail",
                    "terms": "narrow gauge railway,narrow gauge railroad"
                },
                "railway/rail": {
                    "name": "Rail",
                    "terms": ""
                },
                "railway/signal": {
                    "name": "Railway Signal",
                    "terms": "signal,lights"
                },
                "railway/subway_entrance": {
                    "name": "Subway Entrance",
                    "terms": "metro,transit"
                },
                "railway/subway": {
                    "name": "Subway",
                    "terms": "metro,transit"
                },
                "railway/switch": {
                    "name": "Railway Switch",
                    "terms": "switch,points"
                },
                "railway/train_wash": {
                    "name": "Train Wash",
                    "terms": "wash,clean"
                },
                "railway/tram": {
                    "name": "Tram",
                    "terms": "light rail,streetcar,tram,trolley"
                },
                "relation": {
                    "name": "Relation",
                    "terms": ""
                },
                "route/ferry": {
                    "name": "Ferry Route",
                    "terms": ""
                },
                "shop": {
                    "name": "Shop",
                    "terms": ""
                },
                "shop/fishmonger": {
                    "name": "Fishmonger",
                    "terms": ""
                },
                "shop/furnace": {
                    "name": "Furnace Store",
                    "terms": "oven,stove"
                },
                "shop/vacant": {
                    "name": "Vacant Shop",
                    "terms": ""
                },
                "shop/agrarian": {
                    "name": "Agriculture Shop",
                    "terms": "agricultural inputs,agricultural machines,seeds,pesticides,fertilizer,agricultural tools"
                },
                "shop/alcohol": {
                    "name": "Liquor Store",
                    "terms": "alcohol,beer,booze,wine"
                },
                "shop/anime": {
                    "name": "Anime Shop",
                    "terms": "manga,japan,cosplay,figurine,dakimakura"
                },
                "shop/antiques": {
                    "name": "Antiques Shop",
                    "terms": ""
                },
                "shop/appliance": {
                    "name": "Appliance Store",
                    "terms": "air conditioner,appliance,dishwasher,dryer,freezer,fridge,grill,kitchen,oven,refrigerator,stove,washer,washing machine"
                },
                "shop/art": {
                    "name": "Art Store",
                    "terms": "art*,exhibit*,gallery"
                },
                "shop/baby_goods": {
                    "name": "Baby Goods Store",
                    "terms": ""
                },
                "shop/bag": {
                    "name": "Bag/Luggage Store",
                    "terms": "handbag,purse"
                },
                "shop/bakery": {
                    "name": "Bakery",
                    "terms": ""
                },
                "shop/bathroom_furnishing": {
                    "name": "Bathroom Furnishing Store",
                    "terms": ""
                },
                "shop/beauty": {
                    "name": "Beauty Shop",
                    "terms": "spa,salon,tanning"
                },
                "shop/beauty/nails": {
                    "name": "Nail Salon",
                    "terms": "manicure,pedicure"
                },
                "shop/beauty/tanning": {
                    "name": "Tanning Salon",
                    "terms": ""
                },
                "shop/bed": {
                    "name": "Bedding/Mattress Store",
                    "terms": ""
                },
                "shop/beverages": {
                    "name": "Beverage Store",
                    "terms": ""
                },
                "shop/bicycle": {
                    "name": "Bicycle Shop",
                    "terms": "bike,repair"
                },
                "shop/bookmaker": {
                    "name": "Bookmaker",
                    "terms": "betting"
                },
                "shop/books": {
                    "name": "Book Store",
                    "terms": ""
                },
                "shop/boutique": {
                    "name": "Boutique",
                    "terms": ""
                },
                "shop/butcher": {
                    "name": "Butcher",
                    "terms": "meat"
                },
                "shop/candles": {
                    "name": "Candle Shop",
                    "terms": ""
                },
                "shop/car_parts": {
                    "name": "Car Parts Store",
                    "terms": "auto"
                },
                "shop/car_repair": {
                    "name": "Car Repair Shop",
                    "terms": "auto,garage,service"
                },
                "shop/car": {
                    "name": "Car Dealership",
                    "terms": "auto"
                },
                "shop/carpet": {
                    "name": "Carpet Store",
                    "terms": "rug"
                },
                "shop/charity": {
                    "name": "Charity Store",
                    "terms": "thrift,op shop,nonprofit"
                },
                "shop/cheese": {
                    "name": "Cheese Store",
                    "terms": ""
                },
                "shop/chemist": {
                    "name": "Drugstore",
                    "terms": "med*,drug*,gift"
                },
                "shop/chocolate": {
                    "name": "Chocolate Store",
                    "terms": ""
                },
                "shop/clothes": {
                    "name": "Clothing Store",
                    "terms": ""
                },
                "shop/coffee": {
                    "name": "Coffee Store",
                    "terms": ""
                },
                "shop/computer": {
                    "name": "Computer Store",
                    "terms": ""
                },
                "shop/confectionery": {
                    "name": "Candy Store",
                    "terms": "sweet"
                },
                "shop/convenience": {
                    "name": "Convenience Store",
                    "terms": ""
                },
                "shop/copyshop": {
                    "name": "Copy Store",
                    "terms": ""
                },
                "shop/cosmetics": {
                    "name": "Cosmetics Store",
                    "terms": ""
                },
                "shop/craft": {
                    "name": "Arts and Crafts Store",
                    "terms": "art*,paint*,frame"
                },
                "shop/curtain": {
                    "name": "Curtain Store",
                    "terms": "drape*,window"
                },
                "shop/dairy": {
                    "name": "Dairy Store",
                    "terms": "milk,egg,cheese"
                },
                "shop/deli": {
                    "name": "Deli",
                    "terms": "lunch,meat,sandwich"
                },
                "shop/department_store": {
                    "name": "Department Store",
                    "terms": ""
                },
                "shop/doityourself": {
                    "name": "DIY Store",
                    "terms": ""
                },
                "shop/dry_cleaning": {
                    "name": "Dry Cleaner",
                    "terms": ""
                },
                "shop/e-cigarette": {
                    "name": "E-Cigarette Shop",
                    "terms": "electronic,vapor"
                },
                "shop/electronics": {
                    "name": "Electronics Store",
                    "terms": "appliance,audio,blueray,camera,computer,dvd,home theater,radio,speaker,tv,video"
                },
                "shop/erotic": {
                    "name": "Erotic Store",
                    "terms": "sex,porn"
                },
                "shop/fabric": {
                    "name": "Fabric Store",
                    "terms": "sew"
                },
                "shop/farm": {
                    "name": "Produce Stand",
                    "terms": "farm shop,farm stand"
                },
                "shop/fashion": {
                    "name": "Fashion Store",
                    "terms": ""
                },
                "shop/florist": {
                    "name": "Florist",
                    "terms": "flower"
                },
                "shop/frame": {
                    "name": "Framing Shop",
                    "terms": "art*,paint*,photo*,frame"
                },
                "shop/funeral_directors": {
                    "name": "Funeral Home",
                    "terms": "undertaker,memorial home"
                },
                "shop/furniture": {
                    "name": "Furniture Store",
                    "terms": "chair,sofa,table"
                },
                "shop/garden_centre": {
                    "name": "Garden Center",
                    "terms": "landscape,mulch,shrub,tree"
                },
                "shop/gas": {
                    "name": "Bottled Gas Shop",
                    "terms": "cng,lpg,natural gas,propane,refill,tank"
                },
                "shop/gift": {
                    "name": "Gift Shop",
                    "terms": "souvenir"
                },
                "shop/greengrocer": {
                    "name": "Greengrocer",
                    "terms": "fruit,vegetable"
                },
                "shop/hairdresser": {
                    "name": "Hairdresser",
                    "terms": "barber"
                },
                "shop/hardware": {
                    "name": "Hardware Store",
                    "terms": ""
                },
                "shop/hearing_aids": {
                    "name": "Hearing Aids Store",
                    "terms": ""
                },
                "shop/herbalist": {
                    "name": "Herbalist",
                    "terms": ""
                },
                "shop/hifi": {
                    "name": "Hifi Store",
                    "terms": "stereo,video"
                },
                "shop/houseware": {
                    "name": "Houseware Store",
                    "terms": "home,household"
                },
                "shop/interior_decoration": {
                    "name": "Interior Decoration Store",
                    "terms": ""
                },
                "shop/jewelry": {
                    "name": "Jeweler",
                    "terms": "diamond,gem,ring"
                },
                "shop/kiosk": {
                    "name": "Kiosk",
                    "terms": ""
                },
                "shop/kitchen": {
                    "name": "Kitchen Design Store",
                    "terms": ""
                },
                "shop/laundry": {
                    "name": "Laundry",
                    "terms": ""
                },
                "shop/leather": {
                    "name": "Leather Store",
                    "terms": ""
                },
                "shop/locksmith": {
                    "name": "Locksmith",
                    "terms": "key,lockpick"
                },
                "shop/lottery": {
                    "name": "Lottery Shop",
                    "terms": ""
                },
                "shop/mall": {
                    "name": "Mall",
                    "terms": "shopping"
                },
                "shop/massage": {
                    "name": "Massage Shop",
                    "terms": ""
                },
                "shop/medical_supply": {
                    "name": "Medical Supply Store",
                    "terms": ""
                },
                "shop/mobile_phone": {
                    "name": "Mobile Phone Store",
                    "terms": ""
                },
                "shop/money_lender": {
                    "name": "Money Lender",
                    "terms": ""
                },
                "shop/motorcycle": {
                    "name": "Motorcycle Dealership",
                    "terms": "bike"
                },
                "shop/music": {
                    "name": "Music Store",
                    "terms": "CD,vinyl"
                },
                "shop/musical_instrument": {
                    "name": "Musical Instrument Store",
                    "terms": "guitar"
                },
                "shop/newsagent": {
                    "name": "Newspaper/Magazine Shop",
                    "terms": ""
                },
                "shop/nutrition_supplements": {
                    "name": "Nutrition Supplements Store",
                    "terms": ""
                },
                "shop/optician": {
                    "name": "Optician",
                    "terms": "eye,glasses"
                },
                "shop/organic": {
                    "name": "Organic Goods Store",
                    "terms": ""
                },
                "shop/outdoor": {
                    "name": "Outdoors Store",
                    "terms": "camping,climbing,hiking"
                },
                "shop/paint": {
                    "name": "Paint Store",
                    "terms": ""
                },
                "shop/pastry": {
                    "name": "Pastry Shop",
                    "terms": "patisserie,cake shop,cakery"
                },
                "shop/pawnbroker": {
                    "name": "Pawn Shop",
                    "terms": ""
                },
                "shop/perfumery": {
                    "name": "Perfume Store",
                    "terms": ""
                },
                "shop/pet": {
                    "name": "Pet Store",
                    "terms": "animal,cat,dog,fish,kitten,puppy,reptile"
                },
                "shop/photo": {
                    "name": "Photography Store",
                    "terms": "camera,film"
                },
                "shop/pyrotechnics": {
                    "name": "Fireworks Store",
                    "terms": ""
                },
                "shop/radiotechnics": {
                    "name": "Radio/Electronic Component Store",
                    "terms": ""
                },
                "shop/religion": {
                    "name": "Religious Store",
                    "terms": ""
                },
                "shop/scuba_diving": {
                    "name": "Scuba Diving Shop",
                    "terms": ""
                },
                "shop/seafood": {
                    "name": "Seafood Shop",
                    "terms": "fishmonger"
                },
                "shop/second_hand": {
                    "name": "Consignment/Thrift Store",
                    "terms": "secondhand,second hand,resale,thrift,used"
                },
                "shop/shoes": {
                    "name": "Shoe Store",
                    "terms": ""
                },
                "shop/sports": {
                    "name": "Sporting Goods Store",
                    "terms": ""
                },
                "shop/stationery": {
                    "name": "Stationery Store",
                    "terms": "card,paper"
                },
                "shop/storage_rental": {
                    "name": "Storage Rental",
                    "terms": ""
                },
                "shop/supermarket": {
                    "name": "Supermarket",
                    "terms": "grocery,store,shop"
                },
                "shop/tailor": {
                    "name": "Tailor",
                    "terms": "clothes,suit"
                },
                "shop/tattoo": {
                    "name": "Tattoo Parlor",
                    "terms": ""
                },
                "shop/tea": {
                    "name": "Tea Store",
                    "terms": ""
                },
                "shop/ticket": {
                    "name": "Ticket Seller",
                    "terms": ""
                },
                "shop/tiles": {
                    "name": "Tile Shop",
                    "terms": ""
                },
                "shop/tobacco": {
                    "name": "Tobacco Shop",
                    "terms": ""
                },
                "shop/toys": {
                    "name": "Toy Store",
                    "terms": ""
                },
                "shop/trade": {
                    "name": "Trade Shop",
                    "terms": ""
                },
                "shop/travel_agency": {
                    "name": "Travel Agency",
                    "terms": ""
                },
                "shop/tyres": {
                    "name": "Tire Store",
                    "terms": ""
                },
                "shop/vacuum_cleaner": {
                    "name": "Vacuum Cleaner Store",
                    "terms": ""
                },
                "shop/variety_store": {
                    "name": "Variety Store",
                    "terms": ""
                },
                "shop/video_games": {
                    "name": "Video Game Store",
                    "terms": ""
                },
                "shop/video": {
                    "name": "Video Store",
                    "terms": "DVD"
                },
                "shop/watches": {
                    "name": "Watches Shop",
                    "terms": ""
                },
                "shop/water_sports": {
                    "name": "Watersport/Swim Shop",
                    "terms": ""
                },
                "shop/weapons": {
                    "name": "Weapon Shop",
                    "terms": "ammo,gun,knife,knives"
                },
                "shop/window_blind": {
                    "name": "Window Blind Store",
                    "terms": ""
                },
                "shop/wine": {
                    "name": "Wine Shop",
                    "terms": ""
                },
                "tourism": {
                    "name": "Tourism",
                    "terms": ""
                },
                "tourism/alpine_hut": {
                    "name": "Alpine Hut",
                    "terms": "climbing hut"
                },
                "tourism/apartment": {
                    "name": "Guest Apartment / Condo",
                    "terms": ""
                },
                "tourism/aquarium": {
                    "name": "Aquarium",
                    "terms": "fish,sea,water"
                },
                "tourism/artwork": {
                    "name": "Artwork",
                    "terms": "mural,sculpture,statue"
                },
                "tourism/attraction": {
                    "name": "Tourist Attraction",
                    "terms": ""
                },
                "tourism/camp_site": {
                    "name": "Campground",
                    "terms": "tent,rv"
                },
                "tourism/caravan_site": {
                    "name": "RV Park",
                    "terms": "Motor Home,Camper"
                },
                "tourism/chalet": {
                    "name": "Holiday Cottage",
                    "terms": "holiday,holiday cottage,holiday home,vacation,vacation home"
                },
                "tourism/gallery": {
                    "name": "Art Gallery",
                    "terms": "art*,exhibit*,paint*,photo*,sculpt*"
                },
                "tourism/guest_house": {
                    "name": "Guest House",
                    "terms": "B&B,Bed and Breakfast"
                },
                "tourism/hostel": {
                    "name": "Hostel",
                    "terms": ""
                },
                "tourism/hotel": {
                    "name": "Hotel",
                    "terms": ""
                },
                "tourism/information": {
                    "name": "Information",
                    "terms": ""
                },
                "tourism/information/board": {
                    "name": "Information Board",
                    "terms": ""
                },
                "tourism/information/guidepost": {
                    "name": "Guidepost",
                    "terms": "signpost"
                },
                "tourism/information/map": {
                    "name": "Map",
                    "terms": ""
                },
                "tourism/information/office": {
                    "name": "Tourist Information Office",
                    "terms": ""
                },
                "tourism/motel": {
                    "name": "Motel",
                    "terms": ""
                },
                "tourism/museum": {
                    "name": "Museum",
                    "terms": "art*,exhibit*,gallery,foundation,hall,institution,paint*,photo*,sculpt*"
                },
                "tourism/picnic_site": {
                    "name": "Picnic Site",
                    "terms": "camp"
                },
                "tourism/theme_park": {
                    "name": "Theme Park",
                    "terms": ""
                },
                "tourism/viewpoint": {
                    "name": "Viewpoint",
                    "terms": ""
                },
                "tourism/wilderness_hut": {
                    "name": "Wilderness Hut",
                    "terms": "wilderness hut,backcountry hut,bothy"
                },
                "tourism/zoo": {
                    "name": "Zoo",
                    "terms": "animal"
                },
                "traffic_calming": {
                    "name": "Traffic Calming",
                    "terms": "bump,hump,slow,speed"
                },
                "traffic_calming/bump": {
                    "name": "Speed Bump",
                    "terms": "hump,speed,slow"
                },
                "traffic_calming/chicane": {
                    "name": "Traffic Chicane",
                    "terms": "driveway link,speed,slow"
                },
                "traffic_calming/choker": {
                    "name": "Traffic Choker",
                    "terms": "speed,slow"
                },
                "traffic_calming/cushion": {
                    "name": "Speed Cushion",
                    "terms": "bump,hump,speed,slow"
                },
                "traffic_calming/dip": {
                    "name": "Dip",
                    "terms": "speed,slow"
                },
                "traffic_calming/hump": {
                    "name": "Speed Hump",
                    "terms": "bump,speed,slow"
                },
                "traffic_calming/island": {
                    "name": "Traffic Island",
                    "terms": "circle,roundabout,slow"
                },
                "traffic_calming/rumble_strip": {
                    "name": "Rumble Strip",
                    "terms": "audible lines,sleeper lines,growlers"
                },
                "traffic_calming/table": {
                    "name": "Speed Table",
                    "terms": "flat top,hump,speed,slow"
                },
                "type/multipolygon": {
                    "name": "Multipolygon",
                    "terms": ""
                },
                "type/boundary": {
                    "name": "Boundary",
                    "terms": ""
                },
                "type/boundary/administrative": {
                    "name": "Administrative Boundary",
                    "terms": ""
                },
                "type/restriction": {
                    "name": "Restriction",
                    "terms": ""
                },
                "type/restriction/no_left_turn": {
                    "name": "No Left Turn",
                    "terms": ""
                },
                "type/restriction/no_right_turn": {
                    "name": "No Right Turn",
                    "terms": ""
                },
                "type/restriction/no_straight_on": {
                    "name": "No Straight On",
                    "terms": ""
                },
                "type/restriction/no_u_turn": {
                    "name": "No U-turn",
                    "terms": ""
                },
                "type/restriction/only_left_turn": {
                    "name": "Left Turn Only",
                    "terms": ""
                },
                "type/restriction/only_right_turn": {
                    "name": "Right Turn Only",
                    "terms": ""
                },
                "type/restriction/only_straight_on": {
                    "name": "No Turns",
                    "terms": ""
                },
                "type/route_master": {
                    "name": "Route Master",
                    "terms": ""
                },
                "type/route": {
                    "name": "Route",
                    "terms": ""
                },
                "type/route/bicycle": {
                    "name": "Cycle Route",
                    "terms": ""
                },
                "type/route/bus": {
                    "name": "Bus Route",
                    "terms": ""
                },
                "type/route/detour": {
                    "name": "Detour Route",
                    "terms": ""
                },
                "type/route/ferry": {
                    "name": "Ferry Route",
                    "terms": ""
                },
                "type/route/foot": {
                    "name": "Foot Route",
                    "terms": ""
                },
                "type/route/hiking": {
                    "name": "Hiking Route",
                    "terms": ""
                },
                "type/route/horse": {
                    "name": "Riding Route",
                    "terms": ""
                },
                "type/route/light_rail": {
                    "name": "Light Rail Route",
                    "terms": ""
                },
                "type/route/pipeline": {
                    "name": "Pipeline Route",
                    "terms": ""
                },
                "type/route/piste": {
                    "name": "Piste/Ski Route",
                    "terms": ""
                },
                "type/route/power": {
                    "name": "Power Route",
                    "terms": ""
                },
                "type/route/road": {
                    "name": "Road Route",
                    "terms": ""
                },
                "type/route/subway": {
                    "name": "Subway Route",
                    "terms": ""
                },
                "type/route/train": {
                    "name": "Train Route",
                    "terms": ""
                },
                "type/route/tram": {
                    "name": "Tram Route",
                    "terms": ""
                },
                "type/site": {
                    "name": "Site",
                    "terms": ""
                },
                "type/waterway": {
                    "name": "Waterway",
                    "terms": ""
                },
                "vertex": {
                    "name": "Other",
                    "terms": ""
                },
                "waterway/boatyard": {
                    "name": "Boatyard",
                    "terms": ""
                },
                "waterway/canal": {
                    "name": "Canal",
                    "terms": ""
                },
                "waterway/dam": {
                    "name": "Dam",
                    "terms": ""
                },
                "waterway/ditch": {
                    "name": "Ditch",
                    "terms": ""
                },
                "waterway/dock": {
                    "name": "Wet Dock / Dry Dock",
                    "terms": "boat,ship,vessel,marine"
                },
                "waterway/drain": {
                    "name": "Drain",
                    "terms": ""
                },
                "waterway/fuel": {
                    "name": "Marine Fuel Station",
                    "terms": "petrol,gas,diesel,boat"
                },
                "waterway/river": {
                    "name": "River",
                    "terms": "beck,branch,brook,course,creek,estuary,rill,rivulet,run,runnel,stream,tributary,watercourse"
                },
                "waterway/riverbank": {
                    "name": "Riverbank",
                    "terms": ""
                },
                "waterway/sanitary_dump_station": {
                    "name": "Marine Toilet Disposal",
                    "terms": "Boat,Watercraft,Sanitary,Dump Station,Pumpout,Pump out,Elsan,CDP,CTDP,Chemical Toilet"
                },
                "waterway/stream_intermittent": {
                    "name": "Intermittent Stream",
                    "terms": "arroyo,beck,branch,brook,burn,course,creek,drift,flood,flow,gully,run,runnel,rush,spate,spritz,tributary,wadi,wash,watercourse"
                },
                "waterway/stream": {
                    "name": "Stream",
                    "terms": "beck,branch,brook,burn,course,creek,current,drift,flood,flow,freshet,race,rill,rindle,rivulet,run,runnel,rush,spate,spritz,surge,tide,torrent,tributary,watercourse"
                },
                "waterway/water_point": {
                    "name": "Marine Drinking Water",
                    "terms": ""
                },
                "waterway/waterfall": {
                    "name": "Waterfall",
                    "terms": "fall"
                },
                "waterway/weir": {
                    "name": "Weir",
                    "terms": ""
                }
            }
        },
        "imagery": {
            "Bing": {
                "description": "Satellite and aerial imagery.",
                "name": "Bing aerial imagery"
            },
            "DigitalGlobe-Premium": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Premium DigitalGlobe satellite imagery.",
                "name": "DigitalGlobe Premium Imagery"
            },
            "DigitalGlobe-Premium-vintage": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Imagery boundaries and capture dates. Labels appear at zoom level 14 and higher.",
                "name": "DigitalGlobe Premium Imagery Vintage"
            },
            "DigitalGlobe-Standard": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Standard DigitalGlobe satellite imagery.",
                "name": "DigitalGlobe Standard Imagery"
            },
            "DigitalGlobe-Standard-vintage": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Imagery boundaries and capture dates. Labels appear at zoom level 14 and higher.",
                "name": "DigitalGlobe Standard Imagery Vintage"
            },
            "EsriWorldImagery": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Esri world imagery.",
                "name": "Esri World Imagery"
            },
            "MAPNIK": {
                "attribution": {
                    "text": "© OpenStreetMap contributors, CC-BY-SA"
                },
                "description": "The default OpenStreetMap layer.",
                "name": "OpenStreetMap (Standard)"
            },
            "Mapbox": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Satellite and aerial imagery.",
                "name": "Mapbox Satellite"
            },
            "OSM_Inspector-Addresses": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Addresses"
            },
            "OSM_Inspector-Geometry": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Geometry"
            },
            "OSM_Inspector-Highways": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Highways"
            },
            "OSM_Inspector-Multipolygon": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Area"
            },
            "OSM_Inspector-Places": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Places"
            },
            "OSM_Inspector-Routing": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Routing"
            },
            "OSM_Inspector-Tagging": {
                "attribution": {
                    "text": "© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OSM Inspector: Tagging"
            },
            "US-TIGER-Roads-2012": {
                "name": "TIGER Roads 2012"
            },
            "US-TIGER-Roads-2014": {
                "description": "At zoom level 16+, public domain map data from the US Census. At lower zooms, only changes since 2006 minus changes already incorporated into OpenStreetMap",
                "name": "TIGER Roads 2014"
            },
            "US-TIGER-Roads-2017": {
                "description": "Yellow = Public domain map data from the US Census. Red = Data not found in OpenStreetMap",
                "name": "TIGER Roads 2017"
            },
            "Waymarked_Trails-Cycling": {
                "attribution": {
                    "text": "© Sarah Hoffmann, CC by-SA 3.0, map data OpenStreetMap contributors, ODbL 1.0"
                },
                "name": "Waymarked Trails: Cycling"
            },
            "Waymarked_Trails-Hiking": {
                "attribution": {
                    "text": "© Sarah Hoffmann, CC by-SA 3.0, map data OpenStreetMap contributors, ODbL 1.0"
                },
                "name": "Waymarked Trails: Hiking"
            },
            "Waymarked_Trails-MTB": {
                "attribution": {
                    "text": "© Sarah Hoffmann, CC by-SA 3.0, map data OpenStreetMap contributors, ODbL 1.0"
                },
                "name": "Waymarked Trails: MTB"
            },
            "Waymarked_Trails-Skating": {
                "attribution": {
                    "text": "© Sarah Hoffmann, CC by-SA 3.0, map data OpenStreetMap contributors, ODbL 1.0"
                },
                "name": "Waymarked Trails: Skating"
            },
            "Waymarked_Trails-Winter_Sports": {
                "attribution": {
                    "text": "© Michael Spreng, CC by-SA 3.0, map data OpenStreetMap contributors, ODbL 1.0"
                },
                "name": "Waymarked Trails: Winter Sports"
            },
            "basemap.at": {
                "attribution": {
                    "text": "basemap.at"
                },
                "description": "Basemap of Austria, based on goverment data.",
                "name": "basemap.at"
            },
            "basemap.at-orthofoto": {
                "attribution": {
                    "text": "basemap.at"
                },
                "description": "Orthofoto layer provided by basemap.at. \"Successor\" of geoimage.at imagery.",
                "name": "basemap.at Orthofoto"
            },
            "hike_n_bike": {
                "attribution": {
                    "text": "© OpenStreetMap contributors"
                },
                "name": "Hike & Bike"
            },
            "mapbox_locator_overlay": {
                "attribution": {
                    "text": "Terms & Feedback"
                },
                "description": "Shows major features to help orient you.",
                "name": "Locator Overlay"
            },
            "openpt_map": {
                "attribution": {
                    "text": "© OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OpenPT Map (overlay)"
            },
            "osm-gps": {
                "attribution": {
                    "text": "© OpenStreetMap contributors"
                },
                "description": "Public GPS traces uploaded to OpenStreetMap.",
                "name": "OpenStreetMap GPS traces"
            },
            "osm-mapnik-black_and_white": {
                "attribution": {
                    "text": "© OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OpenStreetMap (Standard Black & White)"
            },
            "osm-mapnik-german_style": {
                "attribution": {
                    "text": "© OpenStreetMap contributors, CC-BY-SA"
                },
                "name": "OpenStreetMap (German Style)"
            },
            "qa_no_address": {
                "attribution": {
                    "text": "Simon Poole, Data ©OpenStreetMap contributors"
                },
                "name": "QA No Address"
            },
            "skobbler": {
                "attribution": {
                    "text": "© Tiles: skobbler Map data: OpenStreetMap contributors"
                },
                "name": "skobbler"
            },
            "stamen-terrain-background": {
                "attribution": {
                    "text": "Map tiles by Stamen Design, under CC BY 3.0"
                },
                "name": "Stamen Terrain"
            },
            "tf-cycle": {
                "attribution": {
                    "text": "Maps © Thunderforest, Data © OpenStreetMap contributors"
                },
                "name": "Thunderforest OpenCycleMap"
            },
            "tf-landscape": {
                "attribution": {
                    "text": "Maps © Thunderforest, Data © OpenStreetMap contributors"
                },
                "name": "Thunderforest Landscape"
            }
        }
    }
}
