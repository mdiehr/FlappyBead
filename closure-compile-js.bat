java -server -XX:+TieredCompilation -jar compiler.jar --language_in=ECMASCRIPT5^
 --create_source_map=out/perlenspiel.min.js.map^
 --output_wrapper^
 --create_name_map_files^
 --js=ps/ps3.1.0.js^
 --js=ps/aq1.0.3.js^
 --js=engine/utils.js^
 --js=engine/rect.js^
 --js=engine/point.js^
 --js=engine/collision.js^
 --js=engine/entity.js^
 --js=engine/component.js^
 --js=engine/gameobject.js^
 --js=engine/sprite.js^
 --js=constants.js^
 --js=logic.js^
 --js=soundbank.js^
 --js=behaviors.js^
 --js=bird.js^
 --js=pipe.js^
 --js=worldSpawner.js^
 --js=tap.js^
 --js=best.js^
 --js=ground.js^
 --js=explosion.js^
 --js=scoreTrigger.js^
 --js=numerals.js^
 --js=testpieces.js^
 --js=game.js^
 --js_output_file=out/perlenspiel.min.js
( echo //# sourceMappingURL=perlenspiel.min.js.map ) >> out/perlenspiel.min.js

pause
